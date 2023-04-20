import React from "react";
import { Link } from "react-router-dom";
import Service_img_1 from "./assets/services_asset_1.jpg";
import Service_img_2 from "./assets/services_asset_2.jpeg";
import Service_img_3 from "./assets/services_asset_3.jpg";
import "./services.css";

const Services = () => {
  return (
    <>
      <div className="services_header">
        <h1>VAC Services</h1>
        <p>Paralegal Services</p>
      </div>

      <div className="services_sub_container">
        <div className="services_text">
          <p>
            VAC offers free paralegal advice at our headquarters in Cape Town
            for asylum seekers and refugees. We can assist with asylum
            application appeals, labor disputes and complaints, and denial of
            education and healthcare services. We work closely with other
            organizations, including Scalabrini, the Legal Resource Centre, UCT
            Law Clinic, and CCMA providing referrals as necessary.
            <br />
            <br />
            We encourage everyone to make an appointment with us prior to
            visiting the office. To do so, contact us at &nbsp;
            <strong>info@vacafrica.org.za</strong> &nbsp; or call us at &nbsp;
            <strong>061 408 6346</strong>. We offer walk-in services every day
            from &nbsp;
            <strong>10h00 - 16h00</strong>
          </p>
          <br />

          <Link className="services_btn" to="/contact">
            Book Appointment
          </Link>
        </div>
        <div className="service_img_container service_img_1">
          <img src={Service_img_1} alt="" />
        </div>
      </div>

      <div className="services_sub_container">
        <div className="service_img_container ">
          <img src={Service_img_3} alt="" />
        </div>
        <div className="services_text">
          <h1>Documentations and Appeals</h1>
          <p>
            VAC staff can assist with all questions pertaining to immigration
            documentation. Our paralegal services include:
          </p>
          <p>■ Appeals against the rejection of Refugee Status</p>
          <p>■ Appeals against the intention to withdraw refugee status</p>
          <p>■ Newcomer Letters</p>
          <p>■ Training on the refugee determination form</p>
          <p>■ Right to Education Letters</p>

          <p>
            If you have any questions regarding the asylum seeker process or any
            other documentation issues, feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
