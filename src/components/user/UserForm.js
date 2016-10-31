import React, { PropTypes } from 'react';
import UserDetailsForm from './UserDetailsForm';
import UserPermissions from './UserPermissions';
import Applications from '../applications/Applications';

const UserForm = ({ user, onSave, onChange }) => {
  return(
    <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
      <UserDetailsForm heading="New User"
                       user={user}
                       onChange={onChange}
                       onSave={onSave} />
      <UserPermissions heading="Permissions" />
      <Applications heading="Applications" />
    </div>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UserForm;
