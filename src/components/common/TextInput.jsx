import React, { PropTypes } from 'react';

const TextInput = ({ name, label, placeholder, value, onChange, error }) => {
  let wrapperClass = 'form-group';
  wrapperClass += (error && error.length && ' has-error') || '';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input type="text"
             id={name}
             className="form-control"
             placeholder={placeholder}
             value={value}
             onChange={onChange} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;
