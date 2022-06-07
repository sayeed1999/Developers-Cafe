import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import SearchBar from "../../shared/SearchBar";
import ProductsGrid from "./ProductsGrid";

const FilterableProducts = () => {
  const { fetchProducts } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [productsInDB, setProductsInDB] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setProductsInDB((prev) => products);
        setProductsToDisplay((prev) => products);
      })
      .catch((err) => console.log(err));
  }, []); // [] -> will run once on component mount

  useEffect(() => {
    setProductsToDisplay((prev) => filteredProducts(searchText));
  }, [searchText]); // [searchText] -> will run on 'searchText' state change

  const filteredProducts = (text) => {
    let p = productsInDB.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    return p;
  };

  return (
    <div>
      <SearchBar state={searchText} setState={setSearchText} />
      <ProductsGrid products={productsToDisplay} />
    </div>
  );
};

export default FilterableProducts;
