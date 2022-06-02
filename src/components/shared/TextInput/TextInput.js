const TextInput = ({ type, name }) => {
  return (
    <div className="form-group">
      <label className="form-text">{name}</label>
      <input
        type={type}
        className="form-control"
        placeholder={`Enter ${name}`}
      />
      <small className="form-text text-muted">*Field is required</small>
    </div>
  );
};

export default TextInput;
