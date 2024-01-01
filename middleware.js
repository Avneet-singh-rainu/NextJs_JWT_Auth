import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token");

  if (!token) {
    Response.json({ message: "token not found" });
    return NextResponse.redirect(new URL("/about", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/profile",
};
