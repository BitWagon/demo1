export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  res.setHeader(
    "Set-Cookie",
    "enova_admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );

  return res.status(200).json({
    message: "Logged out successfully",
  });
}