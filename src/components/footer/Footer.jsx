import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/logo-color.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_img_container">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="quick_links_container">
          <h1>Links</h1>

          <div className="quick_links_sub_container">
            <Link to="/" className="quick_links_item">
              Home
            </Link>
            <Link to="/about" className="quick_links_item">
              About
            </Link>
            <Link to="/AOW" className="quick_links_item">
              AOW
            </Link>
            <Link to="/Services" className="quick_links_item">
              Services
            </Link>
            <Link to="/Team" className="quick_links_item">
              Our Team
            </Link>
            <Link to="/Projects" className="quick_links_item">
              Projects
            </Link>
          </div>
        </div>

        <div className="quick_links_container">
          <h1>AOW</h1>
          <div className="quick_links_sub_container">
            <Link to="/AOW" className="quick_links_item">
              Access To Justice
            </Link>
            <Link to="/AOW" className="quick_links_item">
              Rights Advocacy
            </Link>
            <Link to="/AOW" className="quick_links_item">
              Education and Research
            </Link>
          </div>
        </div>

        <div className="quick_links_container">
          <h1>Projects</h1>
          <div className="quick_links_sub_container">
            <Link to="/Projects" className="quick_links_item">
              Anti-Xenophobia
            </Link>
            <Link to="/Projects" className="quick_links_item">
              LGBTIQ
            </Link>
            <Link to="/Projects" className="quick_links_item">
              Academy Read
            </Link>
            <Link to="/Projects" className="quick_links_item">
              English Classes
            </Link>
            <Link to="/Projects" className="quick_links_item">
              DHA Monitoring
            </Link>
          </div>
        </div>

        <div className="quick_links_container">
          <h1>Team</h1>
          <div className="quick_links_sub_container">
            <Link to="/Team" className="quick_links_item">
              Co-founder of VAC
            </Link>
            <Link to="/Team" className="quick_links_item">
              Director of VAC
            </Link>
          </div>
        </div>

        <div className="quick_links_container">
          <h1>Contact</h1>
          <div className="quick_links_sub_container">
            <Link to="/Contact" className="quick_links_item">
              Send Us A Message
            </Link>
          </div>
        </div>
      </footer>
      <div className="copyright">
        &#x00A9;<p>VAC 2023.</p>
        &nbsp;
        <p>
          Designed & Engineered by &nbsp;
          <a
            href="https://www.linkedin.com/in/sandilendimande/"
            target="_blank"
          >
            Sandile Ndimande
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
