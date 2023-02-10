import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_head.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <nav>
        <NavLink
          to="/"
          className="nav_items"
          style={({ isActiveLink }) => {
            return isActiveLink ? "active" : undefined;
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="nav_items"
          style={({ isActiveLink }) => {
            return isActiveLink ? "active" : undefined;
          }}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
