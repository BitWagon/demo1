const COOKIE_NAME = "brand_admin_session";

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

/*
 * Convert a string to Base64URL.
 */
function base64UrlEncode(value) {
  const bytes = new TextEncoder().encode(value);

  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/*
 * Convert Base64URL back to a string.
 */
function base64UrlDecode(value) {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const padded =
    base64 + "=".repeat((4 - (base64.length % 4)) % 4);

  const binary = atob(padded);

  return new TextDecoder().decode(
    Uint8Array.from(
      binary,
      (char) => char.charCodeAt(0)
    )
  );
}

/*
 * Get the signing key using the Web Crypto API.
 *
 * IMPORTANT:
 * We use crypto.subtle instead of Node.js crypto
 * because middleware runs in the Edge runtime.
 */
async function getSigningKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing from .env.local"
    );
  }

  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign", "verify"]
  );
}

/*
 * Create a signature for the session payload.
 */
async function createSignature(payload) {
  const key = await getSigningKey();

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload)
  );

  const bytes = new Uint8Array(signature);

  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/*
 * Verify the session signature.
 */
async function verifySignature(payload, signature) {
  try {
    const key = await getSigningKey();

    const base64 = signature
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const padded =
      base64 + "=".repeat((4 - (base64.length % 4)) % 4);

    const binary = atob(padded);

    const signatureBytes = Uint8Array.from(
      binary,
      (char) => char.charCodeAt(0)
    );

    return await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes,
      new TextEncoder().encode(payload)
    );
  } catch (error) {
    console.error(
      "Signature verification failed:",
      error
    );

    return false;
  }
}

/*
 * Create a new admin session.
 */
export async function createAdminSession() {
  const expiresAt =
    Date.now() + SESSION_DURATION;

  const payload = JSON.stringify({
    role: "admin",
    exp: expiresAt,
  });

  const encodedPayload =
    base64UrlEncode(payload);

  const signature =
    await createSignature(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

/*
 * Verify an existing admin session.
 */
export async function verifyAdminSession(token) {
  try {
    if (!token) {
      return false;
    }

    const parts = token.split(".");

    if (parts.length !== 2) {
      return false;
    }

    const [encodedPayload, signature] = parts;

    const validSignature =
      await verifySignature(
        encodedPayload,
        signature
      );

    if (!validSignature) {
      return false;
    }

    const payload = JSON.parse(
      base64UrlDecode(encodedPayload)
    );

    if (payload.role !== "admin") {
      return false;
    }

    if (!payload.exp) {
      return false;
    }

    if (Date.now() > payload.exp) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Admin session verification error:",
      error
    );

    return false;
  }
}

/*
 * Return the admin session cookie name.
 */
export function getAdminCookieName() {
  return COOKIE_NAME;
}

/*
 * Export COOKIE_NAME as well so existing files
 * can import it directly if necessary.
 */
export { COOKIE_NAME };