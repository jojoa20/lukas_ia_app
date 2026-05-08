import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { updateSession } from "@/lib/supabase/middleware";
import { NextRequest } from "next/server";

// This matcher makes all routes public by default unless protected.
const isPublicRoute = createRouteMatcher(['(.*)']);

export default clerkMiddleware((auth, request: NextRequest) => {
  return updateSession(request);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
