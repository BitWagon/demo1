import {
  createAdminToken,
  getAdminCookieName,
  getAdminSessionMaxAge,
} from "@/lib/adminAuth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { email = "", password = "" } =
      req.body || {};

    const cleanEmail = String(email)
      .trim()
      .toLowerCase();

    const cleanPassword = String(password);

    const adminEmail = String(
      process.env.ADMIN_EMAIL || ""
    )
      .trim()
      .toLowerCase();

    const adminPassword = String(
      process.env.ADMIN_PASSWORD || ""
    );

    /*
     * Make sure admin credentials exist.
     */
    if (!adminEmail || !adminPassword) {
      console.error(
        "ADMIN LOGIN ERROR: ADMIN_EMAIL or ADMIN_PASSWORD is missing from .env.local."
      );

      return res.status(500).json({
        success: false,
        message:
          "Admin authentication is not configured correctly.",
      });
    }

    /*
     * Validate submitted credentials.
     */
    if (!cleanEmail || !cleanPassword) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    /*
     * Check credentials.
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
     * Create the same admin JWT used by
     * adminAuth.js.
     */
    const token = createAdminToken();

    const cookieName = getAdminCookieName();
    const maxAge = getAdminSessionMaxAge();

    /*
     * Set the HTTP-only admin session cookie.
     *
     * No cookie npm package is required.
     */
    res.setHeader(
      "Set-Cookie",
      `${cookieName}=${encodeURIComponent(
        token
      )}; Max-Age=${maxAge}; Path=/; HttpOnly; SameSite=Lax${
        process.env.NODE_ENV === "production"
          ? "; Secure"
          : ""
      }`
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
    });
  } catch (error) {
    console.error(
      "ADMIN LOGIN ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to process admin login right now.",
    });
  }
}