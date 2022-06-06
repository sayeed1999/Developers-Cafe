import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { createContext, useContext } from "react";
import AppMsgs from "../constants/AppMsgs";
import { AuthContext } from "./AuthContext";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const fetchProducts = async () => {
    const db = getDatabase();
    const prodRef = ref(db, "products");
    const prodQuery = query(prodRef, orderByKey());
    try {
      const snapshot = await get(prodQuery);
      if (snapshot.exists()) {
        console.log("all products fetched...");
        return snapshot.val();
      } else {
        throw Error(AppMsgs.NoDataFound);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProductById = async (productId) => {
    const db = getDatabase();
    const productRef = ref(db, "products/" + productId);
    const productQuery = query(productRef);
    try {
      const snapshot = await get(productQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw Error(AppMsgs.NoDataFound);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const giveProductReview = (productId, product, yourReview) => {
    const db = getDatabase();
    const productRef = ref(db, "products/" + productId);
    // buisness of review here..
    const tempEntity = {
      ...product,
      // review: post.likes + 1,
    };
    console.log(yourReview);
    return set(productRef, tempEntity);
  };

  const value = {
    fetchProducts,
    fetchProductById,
    giveProductReview,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
