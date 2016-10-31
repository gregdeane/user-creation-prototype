import React, { Component, PropTypes } from 'react';

import TestTextInput from '../common/TestTextInput';

class TestForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
  }

  onChange(name, value) {
    //this.props.updateUserFormData({ name, value });
  }

  save() {

  }

  render() {
    return(
      <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
        <TestTextInput name="firstName"
                       label="First Name"
                       placeholder="Enter First Name"
                       onChange={this.onChange} />
        <TestTextInput name="lastName"
                       label="Last Name"
                       placeholder="Enter Last Name"
                       onChange={this.onChange} />
      </div>
    );
  }
}

TestForm.propTypes = {
  updateUserFormData: PropTypes.func.isRequired
};

export default TestForm;
