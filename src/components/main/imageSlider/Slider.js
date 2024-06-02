import React, { useState } from "react";
import ProductImage1 from "../../../images/image-product-1.jpg";
import ProductImage2 from "../../../images/image-product-2.jpg";
import ProductImage3 from "../../../images/image-product-3.jpg";
import ProductImage4 from "../../../images/image-product-4.jpg";
import Thumbnails from "./Thumbnails";

const images = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (image) => {
    const index = images.indexOf(image);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <section className="slider">
      <div className="slides">
        <img className="main-image" src={images[currentIndex]} alt="product" />
      </div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
      <Thumbnails onThumbnailClick={handleThumbnailClick} />
    </section>
  );
}

export default Slider;
