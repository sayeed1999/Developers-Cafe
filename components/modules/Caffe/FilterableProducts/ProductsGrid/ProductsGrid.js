import React from "react";
import Product from "../../Product/Product";
import ProductWrapper from "./ProductWrapper/ProductWrapper";

const ProductsGrid = (props) => {
  return (
    <div className="row">
      {props.products.map((product) => (
        <div className="col-md-6">
          {/* Render props pattern used to display products */}
          <Product
            product={product}
            render={(child) => (
              <ProductWrapper productId={product.id}>{child}</ProductWrapper>
            )}
          />
          {/* Higher Order pattern commented in */}
          {/* <ProductWrapper productId={product.id}>
            <Product product={product} />
          </ProductWrapper> */}
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
