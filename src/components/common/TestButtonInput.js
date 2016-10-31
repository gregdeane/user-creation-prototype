import React, { PropTypes } from 'react';

const TestButtonInput = (props) => {
  return (
    <button type={props.type}
            className="dc-btn dc-btn--primary"
            onClick={props.onClick}>
      {props.value}
    </button>
  );
};

TestButtonInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TestButtonInput;
