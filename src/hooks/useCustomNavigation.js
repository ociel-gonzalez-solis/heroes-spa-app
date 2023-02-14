import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const { onLogin, onLogout } = useContext(AuthContext);

  const handleLogin = () => {
    onLogin("Ozzy Mozzy");
    navigate("/", { replace: true });
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  const goBack = () => {
    navigate(-1);
  };

  return { handleLogin, handleLogout, goBack };
};
