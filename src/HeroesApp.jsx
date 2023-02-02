import React from "react";
import { Outlet } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./ui/components/NavBar";

export const HeroesApp = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
