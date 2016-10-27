import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/ButtonInput';

const UserForm = ({ user, onSave, onChange, loading, errors }) => {
  return(
    <div>
      <h1>Manage User</h1>
      <form>
        <TextInput name="firstName"
                   label="First Name"
                   value={user.firstName}
                   onChange={onChange}
                   errors={errors.firstName} />

        <TextInput name="lastName"
                   label="Last Name"
                   value={user.lastName}
                   onChange={onChange}
                   errors={errors.lastName} />

        <TextInput name="email"
                   label="Email"
                   value={user.email}
                   onChange={onChange}
                   errors={errors.email} />

        <ButtonInput type="submit"
                     disabled={loading}
                     label={(loading && 'Saving...') || 'Save'}
                     onClick={onSave} />
      </form>
    </div>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default UserForm;
