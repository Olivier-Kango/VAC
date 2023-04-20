import React, { useState } from "react";
import { faFontAwesomeFlag } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [setShow, isShow] = useState(false);

  let toggleNav = () => {
    isShow(!setShow);
  };

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

      <span
        onClick={toggleNav}
        className={setShow ? "burger_icon_active" : "burger_icon"}
      >
        +
      </span>

      <div className={setShow ? "burger_links" : "hide"}>
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
            Team
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
