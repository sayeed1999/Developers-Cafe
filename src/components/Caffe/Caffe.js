import React from "react";
// import ComponentAtRightBottom from "../shared/ComponentAtRightBottom/ComponentAtRightBottom";
// import Clock from '../shared/Clock/Clock';
import FilterableProducts from "./FilterableProducts/FilterableProducts";

const Caffe = (props) => {
  return (
    <>
      {/* <ComponentAtRightBottom>
        <Clock />
      </ComponentAtRightBottom> */}
      <div className="row">
        <div className="col">
          <FilterableProducts />
        </div>
      </div>
    </>
  );
};

export default Caffe;
