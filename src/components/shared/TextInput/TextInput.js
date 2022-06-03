const TextInput = ({ type, name, required = true }) => {
  return (
    <div className="form-group">
      <label className="form-text">{name}</label>
      <input
        type={type}
        className="form-control"
        placeholder={`Enter ${name}`}
      />
      {required && (
        <small className="form-text text-muted">*Field is required</small>
      )}
    </div>
  );
};

export default TextInput;
