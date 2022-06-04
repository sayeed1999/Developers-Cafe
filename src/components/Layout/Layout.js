const Layout = (props) => {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-9 col-sm-8 col-md-7 col-lg-6">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
