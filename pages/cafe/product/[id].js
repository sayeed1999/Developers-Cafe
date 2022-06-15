import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Product from "../../../components/modules/cafe/Product";
import SingleInputForm from "../../../components/shared/SingleInputForm";
import AppMsgs from "../../../constants/AppMsgs";
import {
  fetchProductById,
  giveProductReview,
} from "../../../store/reducers/productsReducer";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  let product = useSelector((state) => state.products.product);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [yourRating, setYourRating] = useState();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  useEffect(() => {
    if (product?.review && currentUser) {
      setYourRating(() => product.review[currentUser.uid]);
    }
  }, [product]);

  const onRatingSubmit = () => {
    if (
      !(Number.isInteger(+yourRating) && +yourRating >= 1 && +yourRating <= 5)
    ) {
      return swal({
        title: "Warning",
        text: "Rating must be an integer between 1-5",
        icon: "warning",
      });
    }
    giveProductReview(id, product, yourRating)
      .then(() => {
        getProductById();
        setYourRating();
        swal({
          title: "Hoorah!",
          text: AppMsgs.ReviewPlaced,
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  const calculateOverallReview = () => {
    if (!product.review) return 0.0;
    let reviews = Object.values(product.review);
    let sumOfReviews = reviews.reduce((a, b) => +a + +b);
    return (sumOfReviews / reviews.length).toFixed(1);
  };

  const countUsersForRating = (rating) => {
    if (!product.review) return 0;
    let reviews = Object.values(product.review);
    return reviews.filter((x) => x == rating).length; // in js, 4 == '4'
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
                    type="number"
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
