import React from "react";
import Clock from "../shared/Clock/Clock";
import ComponentAtRightBottom from "../shared/ComponentAtRightBottom/ComponentAtRightBottom";
import FilterableProducts from "./FilterableProducts/FilterableProducts";

const Home = (props) => {
  return (
    <>
      <ComponentAtRightBottom>
        <Clock />
      </ComponentAtRightBottom>
      <div className="row">
        <div className="col">
          <FilterableProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
