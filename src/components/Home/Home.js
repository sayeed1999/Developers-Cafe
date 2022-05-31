import React from "react";
import FilterableProducts from "./FilterableProducts/FilterableProducts";

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <FilterableProducts />
        </div>
      </div>
    );
  }
}
