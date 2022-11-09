import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkout_product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                <p>🌟</p>;
              })}
          </div>
          <button>Remove from Basket</button>
        </p>
      </div>
    </div>
  );
};

export default CheckoutProduct;
