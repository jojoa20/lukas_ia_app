import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { updateSession } from "@/lib/supabase/middleware";
import { NextRequest } from "next/server";

// This matcher makes all routes public by default unless protected.
const isPublicRoute = createRouteMatcher(['(.*)']);

export default clerkMiddleware(async (auth, request: NextRequest) => {
  return await updateSession(request);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
