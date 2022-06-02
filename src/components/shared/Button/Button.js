import React from "react";

const Button = ({ children, change, className }) => {
  return (
    <button
      type="button"
      className={`${className} btn btn-md btn-outline-success mt-2`}
      onClick={change}
    >
      {children}
    </button>
  );
};

export default Button;
