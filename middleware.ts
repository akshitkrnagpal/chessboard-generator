import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/icon-(?<number>\d+)x(\1)\.png$/);
  const size = match?.groups?.number;
  if (!size) return NextResponse.next();
  const url = new URL("/api/icon", request.nextUrl);
  url.searchParams.set("size", size);
  return NextResponse.rewrite(url.toString());
}

export const config = {
  matcher: "/icon-:path*",
};
