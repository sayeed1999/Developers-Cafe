const CheckBoxInput = ({ children }) => {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">{children}</label>
    </div>
  );
};

export default CheckBoxInput;
