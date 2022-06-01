import React from "react";
import Product from "./Product/Product";

const ProductsGrid = (props) => {
  return (
    <div className="row">
      {props.products.map((product) => (
        <div className="col-md-6" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
