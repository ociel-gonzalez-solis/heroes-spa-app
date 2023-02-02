import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { ErrorPage, HeroesRoutes } from "../heroes";
import { childHeroesRoutes } from "./HeroRouter";

const routesConfig = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childHeroesRoutes,
    errorElement: <ErrorPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
