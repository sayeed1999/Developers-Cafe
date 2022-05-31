import React from "react";

class Product extends React.Component {
  state = {};

  render() {
    const { product } = this.props;

    return (
      <div style={{ margin: "10px 0" }}>
        <img src={product.img} className="img-thumbnail" />
        <p
          style={{
            backgroundColor: "#efefef",
            margin: "2px",
            padding: "0 2px",
          }}
        >
          {product.name}
        </p>
        <div className="d-flex justify-content-between">
          <div> {product.price} </div>
          <div> {product.stocked ? "In Stock" : "Out Of Stock"} </div>
        </div>
      </div>
    );
  }
}

export default Product;
