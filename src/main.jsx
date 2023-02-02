import React from "react";
import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp";

import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
