import React from "react";
import "./gallery.css";
import Image_1 from "./assets/Img_1.jpg";


const Gallery = () => {
  return (
    <>
      <div className="gallery_header">
        <h1>Gallery</h1>
        <p>See how we have impacted Africa</p>
      </div>
      <div className="gallery_content">
     
           <div className="grid-item">
            <img src={Image_1} alt="Image 1">
        </div>
        <div className="grid-item">
            <img src={Image_1} alt="Image 2">
        </div>
     
      </div>
    </>
  );
};

export default Gallery;
