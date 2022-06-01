import React from "react";
import Clock from "../shared/Clock/Clock";
import FilterableProducts from "./FilterableProducts/FilterableProducts";

const Home = (props) => {
  return (
    <>
      <div style={{ position: "fixed", right: "2px", bottom: "5px" }}>
        <Clock />
      </div>
      <div className="row">
        <div className="col">
          <FilterableProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
