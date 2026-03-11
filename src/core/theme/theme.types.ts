/**
 * Theme type.
 * - "light"  : forces light mode regardless of OS setting
 * - "dark"   : forces dark mode regardless of OS setting
 * - "auto"   : follows the OS / system preference via prefers-color-scheme
 */
export type Theme = "light" | "dark" | "auto";