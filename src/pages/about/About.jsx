import React from "react";
import Img_1 from "./assets/about_asset_2.jpeg";
import Img_2 from "./assets/about_asset_3.jpeg";
import Img_3 from "./assets/about_asset_4.jpg";
import Img_4 from "./assets/about_asset_1.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="about_main_container">
      <div className="about_header_container">
        <h1>About VAC</h1>
        <p>Legal empowerment for all is what we work for</p>
      </div>

      <div className="history_container">
        <div className="history_content">
          <h1>Historical Background Of The Organization</h1>
          <div className="about_text_container">
            <p>
              VAC (Voice of Africans for Change) is a community-based non-profit
              organization registered with the Department of Social Development.
              It seeks to protect and promote the rights of asylum seekers,
              refugees and immigrants in South Africa. Linked to that, VAC seeks
              to promote a holistic integration approach to lessen incidences of
              conflicts related to xenophobia.
            </p>
            <br />
            <p>
              VAC was founded in 2012 as a response to a growing trend of human
              rights violations towards refugees and asylum seekers on the one
              hand, and a need to establish structures capable of providing
              professional educational support to children of immigrants on the
              other hand. In addition to that, threats of a possible xenophobic
              violence outbreak made it necessary to maintain vigilance through
              monitoring and interventions where possible. The aim was to
              pre-empty such attacks as opposed to post-violence intervention
              which is what civil society organizations are known to do.
            </p>
          </div>
        </div>

        <div className="about_img_container">
          <img src={Img_1} alt="" />
        </div>
      </div>

      <div className="history_container">
        <div className="about_img_container">
          <img src={Img_3} alt="" />
        </div>
        <div className="history_content">
          <div className="about_text_container">
            <p>
              VAC seeks to alleviate some forms of discrimination against
              refugees, asylum seekers and immigrants.VAC is deeply committed to
              the preservation of human rights and believe strongly that this is
              a fundamental issue in access to justiceWe provide support to
              foreign nationals in a number of ways, including: offering
              paralegal advice on labour and documentation issues, running
              anti-xenophobia helpdesks in township communities to monitor
              tensions on the ground and to foster the integration of foreign
              nationals, providing assistance in CV-building and job-searching,
              monitoring public policy and service delivery
            </p>
          </div>
        </div>
      </div>

      <div className="history_container">
        <div className="about_img_container">
          <img src={Img_2} alt="" />
        </div>
        <div className="history_content">
          <h1>Mission Statement</h1>
          <div className="about_text_container">
            <p>
              Voice of Africans for Change (VAC) is a non-governmental
              organisation working with communities, government and other civil
              society formations on issues of refugee rights in South Africa.
              While asylum-seekers and refugees have rights established in
              international conventions and South African law, these are often
              violated in practice. VAC engages this challenge by working with
              South Africans as well as foreign-born residents to build bridges,
              especially at the grassroots level.
            </p>
          </div>
        </div>
      </div>

      <div className="history_container">
        <div className="history_content">
          <div className="about_text_container">
            <p>
              We seek to promote greater understanding, tolerance and a
              collective approach to grassroots issues. VAC believes in our
              common humanity, shared African heritage and the rights of all, to
              dignified treatment as enshrined in the various international
              rights conventions of which South Africa is a signatory. These
              values are also embedded in the South African Bill of Rights and
              the national constitution.
            </p>
          </div>
        </div>

        <div className="about_img_container">
          <img src={Img_4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
