import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import SearchBar from "../../shared/SearchBar";
import ProductsGrid from "./ProductsGrid";

const FilterableProducts = () => {
  const { fetchProducts } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setProductsToDisplay(products);
      })
      .catch((err) => console.log(err));
  }, []); // [] indicates that this will run only on component mount

  const onSearchTextChange = (text) => {
    setSearchText(text);
    setProductsToDisplay(filteredProducts(text));
  };

  const filteredProducts = (text) => {
    return products.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <div>
      <SearchBar text={searchText} change={onSearchTextChange} />
      <ProductsGrid products={productsToDisplay} />
    </div>
  );
};

export default FilterableProducts;
