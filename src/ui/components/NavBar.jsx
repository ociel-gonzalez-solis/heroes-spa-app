import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useCustomNavigation } from "../../hooks/useCustomNavigation";

export const NavBar = () => {
  const { handleLogout } = useCustomNavigation();
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-brand">
          <ul className="navbar-nav ml-auto">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/marvel"
            >
              Marvel
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/search"
            >
              Search
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user?.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
