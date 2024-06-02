import React, { useState } from "react";
import Cart from "./Cart";
import CartIcon from "../../images/icon-cart.svg";
import PlusIcon from "../../images/icon-plus.svg";
import MinusIcon from "../../images/icon-minus.svg";

function Product() {
  const [quantity, changeQuantity] = useState(1);

  // doing increaseQuantity as an arrow function
  const increaseQuantity = () => {
    changeQuantity((prevQuantity) => prevQuantity + 1);
  };

  // doing decreaseQuantity as a regular function for comparison
  const decreaseQuantity = () => {
    changeQuantity(function (prevQuantity) {
      return Math.max(prevQuantity - 1, 1);
    });
  };

  return (
    <React.Fragment>
      <section className="product-desc">
        <div className="breadcrumbs">Sneaker Company</div>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <section className="price-wrap">
          <div>
            <span className="current-price">$125.00</span>
            <span className="discount">50%</span>
          </div>
          <div className="old-price">
            <span>$250.00</span>
          </div>
        </section>
        <section className="buttons-wrap">
          <div className="quantity-btn">
            <span>
              <img
                src={MinusIcon}
                onClick={decreaseQuantity}
                alt="minus icon"
              />
            </span>
            <span>{quantity}</span>
            <span>
              <img src={PlusIcon} onClick={increaseQuantity} alt="plus icon" />
            </span>
          </div>
          <div className="cart-btn">
            <img src={CartIcon} alt="cart icon" /> Add to cart
          </div>
        </section>
      </section>
      <Cart productQuantity={quantity} />
    </React.Fragment>
  );
}

export default Product;
