import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../../contexts/ProductContext";
import SingleInputForm from "../../../shared/SingleInputForm/SingleInputForm";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, giveProductReview } = useContext(ProductContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    let productFromDB = getProductById(+id);
    setProduct((prev) => productFromDB);
  }, []);

  const onRatingSubmit = (rating) => {
    giveProductReview();
  };

  return (
    <Product
      product={product}
      render={(props) => (
        <div className="row">
          <div className="col-md-6">{props}</div>
          <div className="col-md-6">
            <b>Ingredients:</b> <br />
            চা, পানি, একটু চিনি, হাল্কার উপর মরিচ ভাঁজা (যেনো মুখ টা পুরে যায়),
            আগুন প্রায় গরম, খেতে ভাঁড়ি চরম!!
            <br />
            <br />
            <h6>Review: 5 star</h6>
            <SingleInputForm
              placeholder="Your rating in range 1-5"
              onSubmit={onRatingSubmit}
            />
          </div>
        </div>
      )}
    />
  );

  return (
    <div className="row">
      <div className="col-md-6">
        <Product product={product} />
      </div>
      <div className="col-md-6">
        <b>Ingredients:</b> <br />
        চা, পানি, একটু চিনি, হাল্কার উপর মরিচ ভাঁজা (যেনো মুখ টা পুরে যায়), আগুন
        প্রায় গরম, খেতে ভাঁড়ি চরম!!
        <br />
        <br />
        <h6>Review: 5 star</h6>
        <SingleInputForm
          placeholder="Your rating in range 1-5"
          onSubmit={onRatingSubmit}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
