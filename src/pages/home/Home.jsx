import React from "react";
import { Link } from "react-router-dom";
import Header_img from "./assets/home-header.jpg";
import Header_img_2 from "./assets/home-header-2.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home_header_main_container">
        <div className="home_header_side">
          <div className="home_header_side_content">
            <h1>Voice of Africans for Change (VAC)</h1>
            <p>Working towards legal empowerment for all</p>

            <div>
              <Link className="home_link" to="/About">
                Read More
              </Link>

              <Link className="home_link" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="home_header_img_container home_header_img">
          <img src={Header_img} alt="" />
        </div>
      </div>
      {/* Para Img */}
      <div className="para_img_1"></div>

      {/* Second section */}
      <div className="home_header_main_container">
        <div className="home_header_img_container">
          <img src={Header_img_2} alt="" />
        </div>
        <div className="home_header_side">
          <div className="home_header_side_content">
            <h1>Area Of Work</h1>
            <p>We strive for excellent rights for all</p>

            <Link className="home_link" to="/AOW">
              View More
            </Link>
          </div>
        </div>
      </div>

      {/* Para Img */}
      <div className="para_img_1"></div>
    </div>
  );
};

export default Home;
