import { useState } from "react";

const SingleInputForm = ({
  type,
  onSubmit,
  buttonName = "Press",
  placeholder,
  label,
}) => {
  const [state, setState] = useState();

  return (
    <div className="row">
      <div className="col-md-9">
        <input
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={() => setState(event.target.value)}
        />
      </div>
      <div className="col-md-3">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onSubmit(state)}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default SingleInputForm;
