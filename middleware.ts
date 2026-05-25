import { type NextRequest } from "next/server";
import { updateSession } from "./src/lib/supabase/middleware";

const protectedRoutes = ["/dashboard", "/posts/new", "/profile/settings"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoute) {
    return await updateSession(request);
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
