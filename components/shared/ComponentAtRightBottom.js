const ComponentAtRightBottom = (props) => {
  return (
    <div style={{ position: "fixed", right: "2px", bottom: "5px" }}>
      {props.children}
    </div>
  );
};

export default ComponentAtRightBottom;
