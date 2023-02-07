import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", { replace: true });
  };
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
            {/* <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/hero"
            >
              Hero
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/search"
            >
              Search
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Login
            </NavLink> */}
          </ul>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Ozzy</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
