import { serialize } from "cookie";
import {
  createAdminToken,
  getAdminCookieName,
} from "@/lib/adminAuth";

export default async function handler(req, res) {
  /*
   * Only POST requests are allowed.
   */
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    /*
     * Make sure the request body exists.
     */
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request body.",
      });
    }

    /*
     * Read login credentials.
     */
    const { email = "", password = "" } = req.body;

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPassword = String(password);

    /*
     * Get admin credentials from environment variables.
     */
    const adminEmail = String(
      process.env.ADMIN_EMAIL || ""
    )
      .trim()
      .toLowerCase();

    const adminPassword = String(
      process.env.ADMIN_PASSWORD || ""
    );

    /*
     * Make sure admin credentials are configured.
     */
    if (!adminEmail || !adminPassword) {
      console.error(
        "ADMIN_EMAIL or ADMIN_PASSWORD is missing from .env.local."
      );

      return res.status(500).json({
        success: false,
        message:
          "Admin authentication is not configured correctly.",
      });
    }

    /*
     * Validate submitted email.
     */
    if (!cleanEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

    /*
     * Validate submitted password.
     */
    if (!cleanPassword) {
      return res.status(400).json({
        success: false,
        message: "Please enter your password.",
      });
    }

    /*
     * Check admin credentials.
     */
    if (
      cleanEmail !== adminEmail ||
      cleanPassword !== adminPassword
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    /*
     * Create JWT admin session token.
     */
    const token = createAdminToken();

    /*
     * Get the same cookie name used by adminAuth.js.
     */
    const cookieName = getAdminCookieName();

    /*
     * Store JWT in a secure HTTP-only cookie.
     *
     * httpOnly:
     * JavaScript in the browser cannot access the token.
     *
     * sameSite:
     * Helps protect against CSRF attacks.
     *
     * maxAge:
     * Seven days, matching the JWT expiration.
     *
     * path:
     * Makes the cookie available throughout the website.
     */
    const cookie = serialize(cookieName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    res.setHeader("Set-Cookie", cookie);

    /*
     * Login successful.
     */
    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
    });
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to process admin login right now.",
    });
  }
}