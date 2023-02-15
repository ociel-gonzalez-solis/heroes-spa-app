import { Navigate } from "react-router-dom";
import { DCPages, HeroPage, MarvelPages, SearchPage } from "../heroes";

export const childHeroesRoutes = [
  { path: "marvel", element: <MarvelPages /> },
  {
    path: "dc",
    element: <DCPages />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "hero/:id",
    element: <HeroPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/marvel"} />,
  },
];
