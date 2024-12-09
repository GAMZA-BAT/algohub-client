import { NextResponse } from "next/server";
import { auth } from "./auth";
import { apiAuthPrefix, publicRoutes } from "./routes";

export default auth(async (req) => {
  const {
    nextUrl: { pathname },
    auth,
  } = req;
  const isLoggedIn = !!auth;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) return;

  const isPublicRoute = publicRoutes.includes(pathname);

  if (!(isLoggedIn || isPublicRoute)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
