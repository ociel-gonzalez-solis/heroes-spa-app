import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DCPages, ErrorPage, MarvelPages } from "../heroes/pages";
import { HeroesApp } from "../HeroesApp";

const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "marvel",
        element: <MarvelPages />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dc",
        element: <DCPages />,
      },
      {
        path: "/*",
        element: <Navigate to={"/marvel"} />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};
