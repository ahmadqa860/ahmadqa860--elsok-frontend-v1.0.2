import React from "react";

const Input = ({ name, label, error,classStyle="form-control", ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className={classStyle} />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;
