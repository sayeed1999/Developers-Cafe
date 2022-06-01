import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product } = props;

  return (
    <div style={{ margin: "10px 0" }}>
      <img
        src={product.img}
        className="img-thumbnail"
        style={{ height: "250px", width: "310px" }}
      />
      <p className="productName">{product.name}</p>
      <div className="d-flex justify-content-between">
        <div> {product.price} </div>
        <div> {product.stocked ? "In Stock" : "Out Of Stock"} </div>
      </div>
      <p className="addToCartButton">Add To Cart</p>
    </div>
  );
};

export default Product;
