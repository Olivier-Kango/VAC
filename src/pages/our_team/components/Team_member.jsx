import React from "react";
import "./team_member.css";

const Team_member = ({ src, href, name, position }) => {
  return (
    <div className="member_div">
      <div className="member_card_img">
        <img src={src} alt="" />
      </div>
      <div className="member_card_content">
        <h1>{name}</h1>
        <p>{position}</p>

        <a href={href} title="Email">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Team_member;
