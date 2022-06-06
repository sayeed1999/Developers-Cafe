import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Product from "../../../components/modules/cafe/Product";
import SingleInputForm from "../../../components/shared/SingleInputForm";
import { ProductContext } from "../../../contexts/ProductContext";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
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
};

export default ProductDetail;
