import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="gallery_header">
        <h1>Gallery</h1>
        <p>See how we have impacted Africa</p>
      </div>
      <div className="gallery_content">
     
           <div className="grid-item">
            <img src="/assets/Img_1.jpg" alt="Image 1">
        </div>
        <div className="grid-item">
            <img src="/assets/Img_1.jpg" alt="Image 2">
        </div>
     
      </div>
    </>
  );
};

export default Gallery;
