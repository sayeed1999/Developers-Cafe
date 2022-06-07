import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Product from "../../../components/modules/cafe/Product";
import SingleInputForm from "../../../components/shared/SingleInputForm";
import AppMsgs from "../../../constants/AppMsgs";
import { AuthContext } from "../../../contexts/AuthContext";
import { ProductContext } from "../../../contexts/ProductContext";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { fetchProductById, giveProductReview } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);
  const [product, setProduct] = useState();
  const [yourRating, setYourRating] = useState();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    fetchProductById(id).then((productInDB) => {
      setProduct((prev) => productInDB);
      if (productInDB?.review && currentUser) {
        setYourRating((prev) => productInDB?.review[currentUser.uid]);
      }
    });
  };

  const onRatingSubmit = () => {
    giveProductReview(id, product, yourRating)
      .then(() => {
        getProductById();
        setYourRating();
        alert(AppMsgs.ReviewPlaced);
      })
      .catch((err) => console.log(err));
  };

  const calculateOverallReview = () => {
    if (!product.review) return 0.0;
    let reviews = Object.values(product.review);
    let sumOfReviews = reviews.reduce((a, b) => +a + +b);
    let overallReview = (sumOfReviews / reviews.length).toFixed(1);
    return overallReview;
  };

  const countUsersForRating = (rating) => {
    if (!product.review) return 0;
    let reviews = Object.values(product.review);
    let ret = reviews.filter((x) => x == rating).length; // in js, 4 == '4'
    return ret;
  };

  return (
    <>
      {product && (
        <Product
          product={product}
          render={(props) => (
            <div className="row">
              <div className="col-md-6">{props}</div>
              <div className="col-md-6">
                <b>Ingredients:</b> <br />
                {product.ingredients}
                <br />
                <br />
                <h6>Overall Review: {calculateOverallReview()}</h6>
                {currentUser && (
                  <SingleInputForm
                    state={yourRating}
                    setState={setYourRating}
                    placeholder="Your rating between 1-5:"
                    onSubmit={onRatingSubmit}
                  />
                )}
                <div>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating}>
                      <Typography variant="caption">
                        Rating given {rating}/5: {countUsersForRating(rating)}{" "}
                        users
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        />
      )}
    </>
  );
};

export default ProductDetail;
