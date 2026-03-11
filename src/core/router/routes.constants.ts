// router/routes.constants.ts

export const ROUTES = {
  HOME:         "/",
  ABOUT:        "/about",
  CODING:       "/coding",
  CODING_DETAIL: "/coding/:slug",
  COMPETENCIES: "/competencies",
  COMPETENCIES_DETAIL: "/competencies/:slug",
  HOBBIES:      "/hobbies",
} as const;

// Helper for build the real slug route 
export const buildRoute = {
  codingDetail:       (slug: string) => `/coding/${slug}`,
  competencyDetail:   (slug: string) => `/competencies/${slug}`,
} as const;