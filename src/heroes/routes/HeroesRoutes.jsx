import { Outlet } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
