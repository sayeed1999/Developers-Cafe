import React from "react";
import styles from "../../../styles/Product.module.css";

/// 'Render-props pattern' used.
const Product = ({ product, render }) => {
  if (render) {
    return render(getProductComponent(product));
  }
  return getProductComponent(product);
};

const getProductComponent = (product) => {
  return (
    <>
      {product && (
        <div style={{ margin: "10px 0" }}>
          <img
            alt=""
            src={product.img}
            className="img-fluid"
            style={{ height: "250px" }}
          />
          <p className={styles.productName}>{product.name}</p>
          <div className="d-flex justify-content-between">
            <div> {product.price} </div>
            <div> {product.stocked ? "In Stock" : "Out Of Stock"} </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
