import React from "react";
import "./projects.css";
import Project_Asset_1 from "./assets/projects_assets_1.jpg";
import Project_Asset_2 from "./assets/projects_assets_2.jpg";
import Project_Asset_3 from "./assets/projects_assets_3.jpg";
import Project_Asset_4 from "./assets/projects_assets_4.jpeg";
import Project_Asset_5 from "./assets/projects_assets_5.jpg";
import Project_Asset_6 from "./assets/projects_assets_6.jpeg";

const Projects = () => {
  return (
    <>
      <div className="projects_header">
        <h1>Projects</h1>
        <p>Some of the projects we're passionate about</p>
      </div>

      <div className="projects_listed">
        <div className="projects">
          <p>Anti-Xenophobia</p>
          <p>Campaign LGBTIQ</p>
          <p>Academy Read And Write Project</p>
          <p>English Classes For Refugees</p>
          <p>DHA Monitoring</p>
        </div>
      </div>

      <div className="projects_assets_container">
        <div className="projects_item_asset">
          <img src={Project_Asset_1} alt="" />
        </div>
        <div className="projects_item_asset">
          <img src={Project_Asset_2} alt="" />
        </div>
        <div className="projects_item_asset">
          <img src={Project_Asset_5} alt="" />
        </div>
        <div className="projects_item_asset">
          <img src={Project_Asset_4} alt="" />
        </div>
        <div className="projects_item_asset">
          <img src={Project_Asset_3} alt="" />
        </div>
        <div className="projects_item_asset">
          <img src={Project_Asset_6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Projects;
