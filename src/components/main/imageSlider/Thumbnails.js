import React from "react";
import ProductImage1 from "../../../images/image-product-1.jpg";
import ProductImage2 from "../../../images/image-product-2.jpg";
import ProductImage3 from "../../../images/image-product-3.jpg";
import ProductImage4 from "../../../images/image-product-4.jpg";
import Thumbnail1 from "../../../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../../../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../../../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../../../images/image-product-4-thumbnail.jpg";

const thumbnailData = [
  { thumbnail: Thumbnail1, productImage: ProductImage1, alt: "Thumbnail 1" },
  { thumbnail: Thumbnail2, productImage: ProductImage2, alt: "Thumbnail 2" },
  { thumbnail: Thumbnail3, productImage: ProductImage3, alt: "Thumbnail 3" },
  { thumbnail: Thumbnail4, productImage: ProductImage4, alt: "Thumbnail 4" },
];

function Thumbnails({ onThumbnailClick }) {
  return (
    <div className="thumbnails">
      {thumbnailData.map((data, index) => (
        <img
          key={index}
          className="thumbnail"
          src={data.thumbnail}
          alt={data.alt}
          onClick={() => onThumbnailClick(data.productImage)}
        />
      ))}
    </div>
  );
}

export default Thumbnails;
