import React, { useState } from "react";
import StartingImage from "../../../images/image-product-1.jpg";
import Thumbnails from "./Thumbnails";

function Slider() {
  const [mainImage, setMainImage] = useState(StartingImage);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <section className="slider">
      <img className="main-image" src={mainImage} alt="enlarged product" />
      <Thumbnails onThumbnailClick={handleThumbnailClick} />
    </section>
  );
}

export default Slider;
