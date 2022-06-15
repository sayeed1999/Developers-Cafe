import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/reducers/productsReducer";
import SearchBar from "../../shared/SearchBar";
import ProductsGrid from "./ProductsGrid";

const FilterableProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.status);
  const [searchText, setSearchText] = useState("");
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(() => {
    if (productsStatus === "unloaded") {
      dispatch(fetchProducts());
    }
    setProductsToDisplay(() => filteredProducts(searchText));
  }, [productsStatus, dispatch]);

  useEffect(() => {
    setProductsToDisplay(() => filteredProducts(searchText));
  }, [searchText]); // [searchText] -> will run on 'searchText' state change

  const filteredProducts = (text) => {
    return products.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <div>
      <SearchBar state={searchText} setState={setSearchText} />
      <ProductsGrid products={productsToDisplay} />
    </div>
  );
};

export default FilterableProducts;
