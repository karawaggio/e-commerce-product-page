import React from "react";
import CartIcon from "../../images/icon-cart.svg";
import PlusIcon from "../../images/icon-plus.svg";
import MinusIcon from "../../images/icon-minus.svg";
import MainProductImg from "../../images/image-product-1.jpg";
import "./MainStyles.css";

function Main() {
  return (
    <main>
      <section className="gallery">
        <img className="main-image" src={MainProductImg} alt="product image" />
      </section>
      <section className="product-desc">
        <div className="breadcrumbs">Sneaker Company</div>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="current-price">
          <span>$125.00</span>
          <span className="discount">50%</span>
        </div>
        <div className="old-price">
          <span>$250.00</span>
        </div>
        <div className="quantity-btn">
          <img src={PlusIcon} alt="plus icon" />
          0
          <img src={MinusIcon} alt="minus icon" />
        </div>
        <div className="cart-btn">
          <img src={CartIcon} alt="cart icon" /> Add to cart
        </div>
      </section>
    </main>
  );
}

export default Main;
