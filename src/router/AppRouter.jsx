import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { ErrorPage, HeroesRoutes } from "../heroes";
import { childHeroesRoutes } from "./HeroRouter";
import { PrivateRoute } from "./PrivateRoute";

const routesConfig = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
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
    // errorElement: <ErrorPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
