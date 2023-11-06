// Protect Spacific Routes
// /extra protected will redirect to /api/auth/signin?callbackUrl=%2Fextra

export { default } from "next-auth/middleware";

export const config = { matcher: ["/extra"] };

// =====================================================
// Protect Spacific Routes
// /extra protected will redirect to /

// import { NextResponse } from "next/server";

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = { matcher: ["/extra"] };
