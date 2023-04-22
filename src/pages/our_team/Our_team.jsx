import React from "react";
import "./our_team.css";
import Team_member from "./components/Team_member";
import Image_1 from "./assets/team_member_1.jpg";
import Image_2 from "./assets/team_member_2.jpg";

const Our_team = () => {
  return (
    <>
      <div className="team_header">
        <h1>Our Team</h1>
        <p>Get to know your reliable VAC team members</p>
      </div>
      <div className="team_cards_content">
        <Team_member
          src={Image_2}
          name="Germain Kalombo Ntambue"
          position="Co-founder of VAC"
        />
        <Team_member
          src={Image_1}
          name="Ngozo Crispin Kassarombo"
          position="Director"
        />
      </div>
    </>
  );
};

export default Our_team;
