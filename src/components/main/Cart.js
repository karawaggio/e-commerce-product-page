import React, { useState } from "react";

function Cart({ productQuantity }) {
  return (
    <section className="cart-wrapper">
      <h1>Cart</h1>
      <hr />
      <span>{productQuantity}</span>
    </section>
  );
}

export default Cart;
