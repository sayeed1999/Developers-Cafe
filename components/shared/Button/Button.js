import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={`${className} btn btn-md btn-outline-success mt-2`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
