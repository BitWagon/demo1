import { NextResponse } from "next/server";

import {
  verifyAdminSession,
  getAdminCookieName,
} from "./src/lib/adminAuth";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  /*
   * The admin login page must always be accessible
   * without an authentication session.
   */
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  /*
   * Protect every route under /admin.
   */
  if (pathname.startsWith("/admin")) {
    const cookieName = getAdminCookieName();

    const sessionToken =
      request.cookies.get(cookieName)?.value;

    /*
     * Verify the admin session.
     */
    const isValidSession =
      await verifyAdminSession(sessionToken);

    /*
     * If the session is missing or invalid,
     * redirect the user to the login page.
     */
    if (!isValidSession) {
      const loginUrl = new URL(
        "/admin/login",
        request.url
      );

      return NextResponse.redirect(loginUrl);
    }

    /*
     * Valid admin session.
     * Allow the request to continue.
     */
    return NextResponse.next();
  }

  /*
   * Allow all non-admin routes normally.
   */
  return NextResponse.next();
}

/*
 * Run middleware only for admin routes.
 */
export const config = {
  matcher: ["/admin/:path*"],
};