export { default as proxy } from "next-auth/middleware"

export const config = {
  // specify the route you want to protect
  matcher: ["/home"],
}
