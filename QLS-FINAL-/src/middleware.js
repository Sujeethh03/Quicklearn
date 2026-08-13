import { NextResponse } from "next/server";
import { CASE_ONLY_REDIRECTS } from "@/data/legacyRedirects.mjs";

const BROCHURE_FILE = "/quicklearn-professional-brochure.html";
const BROCHURE_COOKIE = "ql_brochure";

/**
 * Two jobs:
 *  1. Legacy routes whose rename only changed capitalisation. next.config.mjs
 *     redirects match case-insensitively, which would make /Contact -> /contact
 *     loop forever, so those are matched exactly here.
 *  2. The corporate brochure is a lead magnet: anyone without the unlock cookie
 *     is sent to /brochure to enter their details first.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const destination = CASE_ONLY_REDIRECTS[pathname];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 308);
  }

  if (pathname === BROCHURE_FILE && !request.cookies.get(BROCHURE_COOKIE)) {
    const url = request.nextUrl.clone();
    url.pathname = "/brochure";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Contact", "/Events", "/Login", "/quicklearn-professional-brochure.html"],
};
