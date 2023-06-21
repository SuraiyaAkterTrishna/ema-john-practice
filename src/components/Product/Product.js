import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, seller, ratings, img } = props.product;
  const handleAddToCart = () => {
    console.log("cart button clicked");
  }
  return (
    <div className="product">
      <div className="product-detail">
        <img src={img} alt="" />
        <div className="product-info">
            <p className="product-name">{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
        </div>
      </div>
      <button onClick={handleAddToCart} className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
