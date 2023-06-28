import React, { useState } from "react";
import { faFontAwesomeFlag } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  //Changing navbar color on scroll
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //Toggling the navbar items
  const [setShow, isShow] = useState(false);

  let toggleNav = () => {
    isShow(!setShow);
  };

  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="logo_container">
        <img src={Logo} alt="VAC_Logo" />
      </div>

      <div className="nav_links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/Gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/AOW"
        >
          AOW
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/Projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/Team"
        >
          Our Team
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item_activated" : "nav_item"
          }
          to="/Contact"
        >
          Contact
        </NavLink>
      </div>

      <span
        onClick={toggleNav}
        className={setShow ? "burger_icon_active" : "burger_icon"}
      >
        +
      </span>

      <div className={setShow ? "burger_links" : "hide"}>
        <div className="burger_links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/Gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/AOW"
          >
            AOW
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/Projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/Team"
          >
            Team
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "burger_item_active" : "burger_item"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
