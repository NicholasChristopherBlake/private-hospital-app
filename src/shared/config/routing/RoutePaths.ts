type AppRoutes = "main" | "about" | "profile" | "not_found";

type RoutePathsType = Record<AppRoutes, string>;

export const RoutePaths: RoutePathsType = {
  main: "/",
  about: "/about",
  profile: "/profile",

  // Last
  not_found: "*",
} as const;
