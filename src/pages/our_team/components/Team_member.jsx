import React from "react";
import "./team_member.css";

const Team_member = ({ src, name, position }) => {
  return (
    <div className="member_container">
      <div className="member_card_img">
        <img src={src} alt="" />
      </div>
      <div className="member_card_content">
        <h1>{name}</h1>
        <p>{position}</p>

        <a href="mailto: info@vacafrica.org.za" title="Email">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Team_member;
