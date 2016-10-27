import React, { PropTypes } from 'react';

const ButtonInput = ({ type, label, disabled, onClick }) => {
  return (
    <button type={type}
            disabled={disabled}
            className="btn btn-primary"
            onClick={onClick}>
      {label}
    </button>
  );
};

ButtonInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default ButtonInput;
