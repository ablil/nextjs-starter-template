import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Read maintenance mode from environment variable at runtime
    // This allows toggling maintenance mode without rebuilding the application
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"
    const isMaintenancePage = req.nextUrl.pathname === "/maintenance"

    // Redirect to maintenance page if maintenance mode is enabled
    if (isMaintenanceMode && !isMaintenancePage) {
      return NextResponse.redirect(new URL("/maintenance", req.url))
    }

    // Redirect from maintenance page if maintenance mode is disabled
    if (!isMaintenanceMode && isMaintenancePage) {
      return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Allow maintenance page without authentication
        if (req.nextUrl.pathname === "/maintenance") {
          return true
        }
        // Protected routes require authentication
        if (req.nextUrl.pathname.startsWith("/home")) {
          return !!token
        }
        return true
      },
    },
  },
)

export const config = {
  // Match all routes except:
  // - api routes
  // - _next/static (static files)
  // - _next/image (image optimization)
  // - favicon.ico
  // - files with extensions (e.g., .png, .jpg, .svg)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
