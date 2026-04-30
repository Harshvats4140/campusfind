import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

const CollegesPage = lazy(() => import("./pages/CollegesPage"));
const CollegeDetailPage = lazy(() => import("./pages/CollegeDetailPage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const PredictorPage = lazy(() => import("./pages/PredictorPage"));

function PageFallback() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const collegesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/colleges",
  component: CollegesPage,
});

const collegeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/colleges/$collegeId",
  component: CollegeDetailPage,
});

const compareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compare",
  component: ComparePage,
});

const predictorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/predictor",
  component: PredictorPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  collegesRoute,
  collegeDetailRoute,
  compareRoute,
  predictorRoute,
]);

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
