import { NextResponse } from "next/server";

const ADMIN_COOKIE_NAME =
  "brand_admin_session";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  /*
   * Read the admin session cookie only.
   *
   * IMPORTANT:
   * We do NOT verify JWT here because middleware
   * runs in the Edge runtime and jsonwebtoken uses
   * Node.js crypto.
   *
   * The actual token verification is handled by
   * the Node.js API routes.
   */
  const adminCookie =
    request.cookies.get(
      ADMIN_COOKIE_NAME
    )?.value;

  /*
   * Admin login page.
   *
   * If an admin already has a session cookie,
   * send them directly to the dashboard.
   */
  if (pathname === "/admin/login") {
    if (adminCookie) {
      return NextResponse.redirect(
        new URL("/admin", request.url)
      );
    }

    return NextResponse.next();
  }

  /*
   * Protect all other admin pages.
   */
  if (pathname.startsWith("/admin")) {
    /*
     * No admin cookie means the user is not logged in.
     */
    if (!adminCookie) {
      const loginUrl = new URL(
        "/admin/login",
        request.url
      );

      loginUrl.searchParams.set(
        "redirect",
        pathname
      );

      return NextResponse.redirect(
        loginUrl
      );
    }

    /*
     * Cookie exists.
     *
     * Let the request continue.
     *
     * The API/server-side authentication layer
     * will verify the actual JWT.
     */
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};