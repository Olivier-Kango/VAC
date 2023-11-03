import React from "react";
import "./our_team.css";
import Team_member from "./components/Team_member";
import Image_1 from "./assets/Bernard_Toyambi.jpg";
import Image_2 from "./assets/Ngozo_Crispin.jpg";
import Image_3 from "./assets/Bob.jpg";
import Image_4 from "./assets/Jean_Paul_Luamba.jpg";

const Our_team = () => {
  return (
    <>
      <div className="team_header">
        <h1>Our Team</h1>
        <p>Get to know your reliable VAC team members</p>
      </div>
      <div className="team_cards_content">
        <Team_member
          src={Image_1}
          href={"mailto: bernard@vacafrica.co.za"}
          name="Bernard Toyambi"
          position="Founder of VAC"
        />
        <Team_member
          src={Image_2}
          href={"mailto: crispin@vacafrica.co.za"}
          name="Ngozo Crispin"
          position="Director"
        />
        <Team_member
          src={Image_3}
          href={"mailto: bob@vacafrica.co.za"}
          name="Bob Wande Ndienge"
          position="Co-ordinator"
        />
        <Team_member
          src={Image_4}
          href={"mailto: jean-paul@vacafrica.co.za"}
          name="Jean Paul"
          position="Media Director"
        />
      </div>
    </>
  );
};

export default Our_team;
