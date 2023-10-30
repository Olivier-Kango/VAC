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
          href={"mailto: bernard@vacafrica.co.za"}
          name="Bernard Toyambi"
          position="Founder of VAC"
        />
        <Team_member
          src={Image_1}
          href={"mailto: crispin@vacafrica.co.za"}
          name="Ngozo Crispin Kassarombo"
          position="Board Member"
        />
        <Team_member
          src={Image_1}
          href={"mailto: bob@vacafrica.co.za"}
          name="Bob"
          position="Board Member"
        />
        <Team_member
          src={Image_1}
          href={"mailto: jean-paul@vacafrica.co.za"}
          name="Jean Paul Luamba"
          position="Board Member"
        />
      </div>
    </>
  );
};

export default Our_team;
