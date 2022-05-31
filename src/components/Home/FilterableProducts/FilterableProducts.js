import React from "react";
import SearchBar from "../../shared/SearchBar/SearchBar";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

class FilterableProducts extends React.Component {
  state = {
    searchText: "",
    products: PRODUCTS,
  };

  onSearchTextChange = (text) => {
    this.setState({
      searchText: text,
      products: this.filteredProducts(text),
    });
  };

  filteredProducts = (text) => {
    return PRODUCTS.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <SearchBar
          text={this.state.searchText}
          change={this.onSearchTextChange}
        />
        <ProductsGrid products={products} />
      </div>
    );
  }
}

export default FilterableProducts;

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
