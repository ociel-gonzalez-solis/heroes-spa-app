import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { ErrorPage, HeroesRoutes } from "../heroes";
import { childHeroesRoutes, PrivateRoute, PublicRoute } from "./";

const routesConfig = createBrowserRouter([
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    ),
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
