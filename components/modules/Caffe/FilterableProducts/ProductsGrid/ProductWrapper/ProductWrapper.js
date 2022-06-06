import { Link } from "react-router-dom";
import "./ProductWrapper.css";

const ProductWrapper = ({ children, productId }) => {
  return (
    <>
      {children}
      <p className="addToCartButton">Order Now</p>
      <Link
        style={{ textDecoration: "none" }}
        to={`/caffe/product/${productId}`}
      >
        <p className="productReview">Review</p>
      </Link>
    </>
  );
};

export default ProductWrapper;
