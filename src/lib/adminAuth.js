import jwt from "jsonwebtoken";

const ADMIN_SESSION_COOKIE = "brand_admin_session";

const getAdminSecret = () => {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not defined in .env.local."
    );
  }

  return secret;
};

export function createAdminToken() {
  const secret = getAdminSecret();

  return jwt.sign(
    {
      role: "admin",
    },
    secret,
    {
      expiresIn: "7d",
    }
  );
}

export function verifyAdminToken(token) {
  if (!token) {
    return null;
  }

  try {
    const secret = getAdminSecret();

    return jwt.verify(token, secret);
  } catch (error) {
    console.error("Admin token verification failed:", error.message);

    return null;
  }
}

export function getAdminCookieName() {
  return ADMIN_SESSION_COOKIE;
}

export function getAdminFromRequest(req) {
  try {
    const cookieHeader = req.headers.cookie || "";

    const cookies = cookieHeader
      .split(";")
      .map((cookie) => cookie.trim())
      .filter(Boolean);

    const adminCookie = cookies.find((cookie) =>
      cookie.startsWith(`${ADMIN_SESSION_COOKIE}=`)
    );

    if (!adminCookie) {
      return null;
    }

    const token = adminCookie.substring(
      `${ADMIN_SESSION_COOKIE}=`.length
    );

    if (!token) {
      return null;
    }

    return verifyAdminToken(token);
  } catch (error) {
    console.error(
      "Unable to read admin session:",
      error.message
    );

    return null;
  }
}

export function isAdminRequest(req) {
  const admin = getAdminFromRequest(req);

  return Boolean(admin && admin.role === "admin");
}