import jwt from "jsonwebtoken";

const ADMIN_SESSION_COOKIE = "brand_admin_session";
const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getAdminSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not defined in .env.local."
    );
  }

  return secret;
}

/*
 * Create a JWT for the admin session.
 */
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

/*
 * Verify a JWT token.
 *
 * This function is used by API routes where
 * jsonwebtoken is fully supported.
 */
export function verifyAdminToken(token) {
  if (!token) {
    return null;
  }

  try {
    const secret = getAdminSecret();

    const decoded = jwt.verify(token, secret);

    if (!decoded || decoded.role !== "admin") {
      return null;
    }

    return decoded;
  } catch (error) {
    console.error(
      "Admin token verification failed:",
      error.message
    );

    return null;
  }
}

/*
 * Get the single cookie name used throughout
 * the entire admin authentication system.
 */
export function getAdminCookieName() {
  return ADMIN_SESSION_COOKIE;
}

/*
 * Get the cookie lifetime.
 */
export function getAdminSessionMaxAge() {
  return ADMIN_SESSION_MAX_AGE;
}

/*
 * Read the admin token from an API request.
 */
export function getAdminFromRequest(req) {
  try {
    const cookieHeader = req.headers.cookie || "";

    if (!cookieHeader) {
      return null;
    }

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

/*
 * Check whether an API request belongs to an admin.
 */
export function isAdminRequest(req) {
  const admin = getAdminFromRequest(req);

  return Boolean(admin && admin.role === "admin");
}

/*
 * Compatibility helper.
 *
 * Some existing backend code may call
 * verifyAdminSession(). Keep this function
 * available so we do not break those routes.
 */
export function verifyAdminSession(token) {
  const decoded = verifyAdminToken(token);

  return Boolean(decoded && decoded.role === "admin");
}