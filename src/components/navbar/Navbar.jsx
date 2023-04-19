import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo_container">
        <img src={Logo} alt="VAC_Logo" />
      </div>

      <div className="nav_links">
        <Link className="nav_item" to="/">
          Home
        </Link>
        <Link className="nav_item" to="/About">
          About
        </Link>
        <Link className="nav_item" to="/Gallery">
          Gallery
        </Link>
        <Link className="nav_item" to="/AOW">
          AOW
        </Link>
        <Link className="nav_item" to="/services">
          Services
        </Link>
        <Link className="nav_item" to="/Projects">
          Projects
        </Link>
        <Link className="nav_item" to="/Team">
          Our Team
        </Link>
        <Link className="nav_item" to="/Contact">
          Contact
        </Link>
      </div>

      <div className="burger_links">
        <div className="burger_links">
          <Link className="burger_item" to="/">
            Home
          </Link>
          <Link className="burger_item" to="/About">
            About
          </Link>
          <Link className="burger_item" to="/Gallery">
            Gallery
          </Link>
          <Link className="burger_item" to="/AOW">
            AOW
          </Link>
          <Link className="burger_item" to="/services">
            Services
          </Link>
          <Link className="burger_item" to="/Projects">
            Projects
          </Link>
          <Link className="burger_item" to="/Team">
            Our Team
          </Link>
          <Link className="burger_item" to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
