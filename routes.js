/**
 * An Array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposed.
 */
export const apiAuthPrefix = "/api/auth";

/**
 * dEFAULT REDIRECT PATH FOR LOGIN
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
