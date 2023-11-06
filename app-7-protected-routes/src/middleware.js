import { NextResponse } from "next/server";

const auth = false;

const protectedRoutes = ["/middleware"];

export default function middleware(req) {
  if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
