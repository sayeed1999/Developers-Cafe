import React from "react";
import Product from "./Product/Product";

export default class ProductsGrid extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    );
  }
}
