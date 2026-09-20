import { jwtVerify } from "jose";

const ADMIN_SESSION_COOKIE = "brand_admin_session";

function getAdminSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not defined in .env.local."
    );
  }

  return new TextEncoder().encode(secret);
}

/*
 * Verify the admin JWT inside the Next.js Edge Runtime.
 *
 * This file intentionally uses "jose" instead of
 * "jsonwebtoken" because middleware runs in the
 * Edge Runtime.
 */
export async function verifyAdminSessionEdge(token) {
  if (!token) {
    return false;
  }

  try {
    const secret = getAdminSecret();

    const { payload } = await jwtVerify(token, secret);

    if (!payload || payload.role !== "admin") {
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Admin Edge token verification failed:",
      error.message
    );

    return false;
  }
}

export function getAdminCookieNameEdge() {
  return ADMIN_SESSION_COOKIE;
}