import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lastPath = pathname + search;

  useEffect(() => {
    localStorage.setItem("lastPath", lastPath);
  }, [lastPath]);

  return logged ? children : <Navigate to={"/login"} />;
};
