import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <h1>Contact</h1>
        <p>Lets connect</p>
      </div>

      <div className="info_form_container">
        <div className="information_container">
          <h1>Information</h1>
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
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
