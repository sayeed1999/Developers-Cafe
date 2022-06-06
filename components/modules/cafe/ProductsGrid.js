import React from "react";
import Product from "./Product";
import ProductWrapper from "./ProductWrapper";

const ProductsGrid = ({ products }) => {
  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div className="col-md-6" key={Math.random()}>
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
