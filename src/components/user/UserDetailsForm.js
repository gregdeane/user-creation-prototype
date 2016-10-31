import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/ButtonInput';

const UserDetailsForm = ({ heading, user, onChange, onSave }) => {
  return (
    <div className="dc-column temp-border">
      <h1>{heading}</h1>
      <TextInput name="firstName"
                 label="First Name"
                 placeholder="First Name"
                 value={user.firstName}
                 onChange={onChange} />

      <TextInput name="lastName"
                 label="Last Name"
                 placeholder="Last Name"
                 value={user.lastName}
                 onChange={onChange} />

      <TextInput name="email"
                 label="Email"
                 placeholder="Email"
                 value={user.email}
                 onChange={onChange} />

      <ButtonInput type="submit"
                   label="Next"
                   onClick={onSave} />
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
