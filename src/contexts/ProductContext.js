import { createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const products = PRODUCTS;

  const getProductById = (id) => {
    return products.find((x) => x.id === id);
  };

  const giveProductReview = () => {
    // TODO:- do something...
    console.log("product review given...");
  };

  return (
    <ProductContext.Provider
      value={{ products, getProductById, giveProductReview }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

const PRODUCTS = [
  {
    id: 1,
    category: "Coffee",
    price: "$9.99",
    stocked: true,
    name: "Espresso",
    img: "https://th.bing.com/th/id/OIP.81zV2zMum-swUEnOz5o2qgHaFP?pid=ImgDet&w=1200&h=850&rs=1",
  },
  {
    id: 2,
    category: "Coffee",
    price: "$8.99",
    stocked: true,
    name: "Latte",
    img: "https://th.bing.com/th/id/OIP.qt87YWIcF7DvpuDQEyTlrAHaGM?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    category: "Coffee",
    price: "$9.99",
    stocked: true,
    name: "Espresso",
    img: "https://th.bing.com/th/id/OIP.81zV2zMum-swUEnOz5o2qgHaFP?pid=ImgDet&w=1200&h=850&rs=1",
  },
  {
    id: 4,
    category: "Coffee",
    price: "$8.99",
    stocked: true,
    name: "Latte",
    img: "https://th.bing.com/th/id/OIP.qt87YWIcF7DvpuDQEyTlrAHaGM?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    category: "Coffee",
    price: "$8.99",
    stocked: true,
    name: "Latte",
    img: "https://th.bing.com/th/id/OIP.qt87YWIcF7DvpuDQEyTlrAHaGM?pid=ImgDet&rs=1",
  },
];
