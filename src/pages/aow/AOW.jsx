import React from "react";
import "./aow.css";
import AOW_asset_1 from "./assets/aow_assets_1.jpg";
import AOW_asset_2 from "./assets/aow_assets_2.jpeg";
import AOW_asset_3 from "./assets/aow_assets_3.jpeg";

const AOW = () => {
  return (
    <>
      <div className="aow_header">
        <h1>Areas Of Work</h1>
        <p>Get to know more about the 3 areas of work we specialise in</p>
      </div>
      <section className="aow_item_main_container">
        <div className="aow_item_container">
          <div className="aow_item_text">
            <h1>Access to Justice</h1>
            <p>
              Access to Justice is mostly about providing paralegal advice for
              refugees, asylum-seekers and immigrants including on issues of
              LGBTI and gender rights. Particular attention is paid to issues
              of:
            </p>
            <p>■ Legal Documentation</p>
            <p>
              ■ Access to education for children of refugees and asylum seekers
            </p>
            <p>
              ■ Labour rights including unfair dismissal, labour disputes,
              access to CCMA and Labour Courts, and accessing other legal rights
              NGOs
            </p>
          </div>
          <div className="aow_item_img">
            <img src={AOW_asset_1} alt="" />
          </div>
        </div>
        <div className="aow_item_container">
          <div className="aow_item_img">
            <img src={AOW_asset_3} alt="" />
          </div>
          <div className="aow_item_text">
            <h1>Rights Advocacy</h1>
            <p>
              Rights advocacy is primarily about informing, educating, and
              engaging local communities about asylum-seeker and refugee rights
              through workshops, social events like soccer tournaments, and
              engagements with stakeholders like Home Affairs and the local
              SAPS.
              <br />
              <br />
              Where it assists in community-level work, VAC engages government
              institutions, especially SAPS, and the departments of Home
              Affairs, Education, and Health around issues of administration,
              corruption, and upholding human dignity.VAC engages the public
              through the media in favour of refugee rights in particular and
              common humanity in general.
            </p>
          </div>
        </div>
        <div className="aow_item_container">
          <div className="aow_item_text">
            <h1>Education and research</h1>
            <p>
              ■ VAC offers English-classes in communities.
              <br />
              <br />
              ■ The research will include monitoring the political mood of
              communities in collaboration with the authorities to assist in
              preventing xenophobic incidents.
              <br />
              <br />■ Linked to this, VAC collaborates with institutions of
              higher learning around research into issues of refugee rights and
              community-building, including the Department of Political Studies
              at the University of the Western Cape, and the Centre for Applied
              Human Rights at the University of York in the United Kingdom and
              other institutions.
            </p>
          </div>
          <div className="aow_item_img">
            <img src={AOW_asset_2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AOW;
