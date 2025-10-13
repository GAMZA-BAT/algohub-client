import { apiAuthPrefix, publicRoutes } from "@/routes";
import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth(async (req) => {
  const {
    nextUrl: { pathname },
    auth,
    url,
    headers,
  } = req;
  const isLoggedIn = !!auth;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) return;

  const isPublicRoute = publicRoutes.includes(pathname);
  const isUserInfo = pathname.split("/").length === 2;

  if (!(isUserInfo || isLoggedIn || isPublicRoute)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const groupIdPattern = /^\/group\/([^/]+)\/notice(\/.*)?$/;
  const match = pathname.match(groupIdPattern);
  const isSoftNavigation = headers.get("next-url");

  console.log({ pathname, isSoftNavigation });
  if (!isSoftNavigation && match) {
    const groupId = match[1];
    const rewriteUrl = new URL(`/group/${groupId}`, url);

    const response = NextResponse.rewrite(rewriteUrl);

    response.cookies.set("modal-path", pathname, {
      path: `/group/${groupId}`,
      maxAge: 5,
    });

    return response;
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
