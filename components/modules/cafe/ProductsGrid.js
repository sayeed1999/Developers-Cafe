import React from "react";
import Product from "./Product";
import ProductWrapper from "./ProductWrapper";

const ProductsGrid = ({ products }) => {
  return (
    <div className="row">
      {products &&
        Object.entries(products).map((entry) => (
          <div className="col-md-6" key={entry[0]}>
            {/* Render props pattern used to display products */}
            <Product
              // productId={entry[0]}
              product={entry[1]}
              render={(child) => (
                <ProductWrapper productId={entry[0]}>{child}</ProductWrapper>
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
