import {
  createRouter,
  createRootRoute,
  createRoute,
  createMemoryHistory,
} from "@tanstack/react-router";

export const rootRoute = createRootRoute();

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
  history: createMemoryHistory(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
