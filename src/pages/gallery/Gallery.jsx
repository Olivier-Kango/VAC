import React from "react";
import "./gallery.css";
import Image_1 from "./assets/Img_1.jpg";
import Image_2 from "./assets/Img_2.jpg";
import Image_3 from "./assets/Img_3.jpg";
import Image_4 from "./assets/Img_4.jpg";
import Image_5 from "./assets/Img_5.jpg";


const Gallery = () => {
  return (
    <>
      
     
    <div className="gallery_header">
    <h1>Gallery</h1>
    <p>See how we have impacted Africa</p>
</div>
<div className="gallery_content">
    <div className="grid-item">
        <img src={Image_1} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_2} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_3} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_4} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_5} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_1} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_1} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_1} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_1} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_1} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_1} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_1} alt="Image 2" />
    </div>
</div>

    </>
  );
};

export default Gallery;
