import React, { PropTypes } from 'react';
import TestTextInput from '../common/TestTextInput';
import TestButtonInput from '../common/TestButtonInput';

const UserDetailsForm = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return (
    <div className="dc-column temp-border">
      <h1>{props.heading}</h1>
      <TestTextInput name="firstName"
                     label="First Name"
                     placeholder="First Name"
                     value={props.user.firstName}
                     onChange={handleChange} />

      <TestTextInput name="lastName"
                     label="Last Name"
                     placeholder="Last Name"
                     value={props.user.lastName}
                     onChange={handleChange} />

      <TestTextInput name="email"
                     label="Email"
                     placeholder="Email"
                     value={props.user.email}
                     onChange={handleChange} />

      <TestButtonInput type="submit"
                       value="Next"
                       onClick={props.onSave} />
    </div>
  );
};

UserDetailsForm.propTypes = {
  heading: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default UserDetailsForm;
