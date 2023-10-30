import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintRoller,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <h1>Contact</h1>
        <p>Let's connect in a way you see fit</p>
      </div>

      <div className="info_form_container">
        <div className="information_container">
          <div>
            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                <h1>Head Office</h1>
              </span>

              <address>
                11 Robert Sobukwe Rd,
                <br />
                Bellville Cape Town,
                <br />
                7530,
                <br />
                Cape Leisure Land Unit 11
              </address>
            </div>

            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faPhone} shake />
                &nbsp;
                <h1>Socials</h1>
              </span>
              <p>WhatsApp: 081 660 6987</p>
              <a href="https://instagram.com/voicesofafrican4change?igshid=MzRlODBiNWFlZA==">Instagram</a>
            </div>

            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                <h1>Email Address</h1>
              </span>
              <p>info@vacafrica.co.za</p>
            </div>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email-address*" required />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message*"
            required
          ></textarea>
          <a className="submit_btn" href="mailto:info@vacafrica.co.za">Send</a>
        </form>
      </div>
    </>
  );
};

export default Contact;
