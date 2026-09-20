import { getAdminCookieName } from "@/lib/adminAuth";

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
     * Get the exact same cookie name used by
     * login, middleware, and adminAuth.
     */
    const cookieName = getAdminCookieName();

    /*
     * Expire the admin session cookie immediately.
     */
    res.setHeader(
      "Set-Cookie",
      `${cookieName}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax${
        process.env.NODE_ENV === "production"
          ? "; Secure"
          : ""
      }`
    );

    return res.status(200).json({
      success: true,
      message: "Admin logout successful.",
    });
  } catch (error) {
    console.error("ADMIN LOGOUT ERROR:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to process admin logout right now.",
    });
  }
}