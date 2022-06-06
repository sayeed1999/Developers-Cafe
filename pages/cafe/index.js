import FilterableProducts from "../../components/modules/cafe/FilterableProducts";

const Cafe = () => {
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

export default Cafe;
