import {
  createAdminSession,
  getAdminCookieName,
} from "@/lib/adminAuth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const adminEmail = process.env.ADMIN_EMAIL?.trim();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error(
        "ADMIN_EMAIL or ADMIN_PASSWORD is missing from .env.local"
      );

      return res.status(500).json({
        message:
          "Admin authentication is not configured correctly.",
      });
    }

    const submittedEmail = email.trim();

    /*
     * Check admin email and password.
     */
    if (
      submittedEmail.toLowerCase() !==
        adminEmail.toLowerCase() ||
      password !== adminPassword
    ) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    /*
     * Create signed admin session.
     */
    const sessionToken = await createAdminSession();

    /*
     * Create HttpOnly admin cookie.
     */
    const cookieName = getAdminCookieName();

    const cookieValue = [
      `${cookieName}=${encodeURIComponent(sessionToken)}`,
      "Path=/",
      "HttpOnly",
      "SameSite=Lax",
      `Max-Age=${24 * 60 * 60}`,
      ...(process.env.NODE_ENV === "production"
        ? ["Secure"]
        : []),
    ].join("; ");

    res.setHeader("Set-Cookie", cookieValue);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      message: "Something went wrong during login.",
    });
  }
}