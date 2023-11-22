export { default } from "next-auth/middleware"

/**
 * @matcher {string[]} - Array of pages that you want to protect
 */
export const config = { matcher: [
  "/",
  "/transactions",
  "/transactions/new",
  "/profile",
]}