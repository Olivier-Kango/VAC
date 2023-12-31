import React from "react";
import "./gallery.css";
import Image_1 from "./assets/Img_1.jpg";
import Image_2 from "./assets/Img_2.jpg";
import Image_3 from "./assets/Img_3.jpg";
import Image_4 from "./assets/Img_4.jpg";
import Image_5 from "./assets/Img_5.jpg";
import Image_6 from "./assets/Img_6.jpg";
import Image_7 from "./assets/Img_7.jpg";
import Image_8 from "./assets/Img_8.jpg";
import Image_9 from "./assets/Img_9.jpg";
import Image_10 from "./assets/Img_10.jpg";
import Image_11 from "./assets/Img_11.jpg";
import Image_12 from "./assets/Img_12.jpg";
import Image_13 from "./assets/Img_13.jpg";
import Image_14 from "./assets/Img_14.jpg";
import Image_15 from "./assets/Img_15.jpg";


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
        <img src={Image_6} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_7} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_8} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_9} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_10} alt="Image 2" />
    </div>
   <div className="grid-item">
        <img src={Image_11} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_12} alt="Image 2" />
    </div>

     <div className="grid-item">
        <img src={Image_13} alt="Image 1" />
    </div>
    <div className="grid-item">
        <img src={Image_14} alt="Image 2" />
    </div>
     <div className="grid-item">
        <img src={Image_15} alt="Image 1" />
    </div>
</div>
    </>
  );
};

export default Gallery;
