import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/ButtonInput';

const UserForm = ({ user, onSave, onChange, loading, errors }) => {
  return(
    <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
      <div className="dc-column">
        <h1>Manage User</h1>
        <form>
          <TextInput name="firstName"
                     label="First Name"
                     placeholder="First Name"
                     value={user.firstName}
                     onChange={onChange}
                     errors={errors.firstName} />

          <TextInput name="lastName"
                     label="Last Name"
                     placeholder="Last Name"
                     value={user.lastName}
                     onChange={onChange}
                     errors={errors.lastName} />

          <TextInput name="email"
                     label="Email"
                     placeholder="Email"
                     value={user.email}
                     onChange={onChange}
                     errors={errors.email} />

          <ButtonInput type="submit"
                       disabled={loading}
                       label={(loading && 'Saving...') || 'Save'}
                       onClick={onSave} />
        </form>
      </div>
      <div className="dc-column">
        <input type="checkbox" className="dc-checkbox" id="c1" />
        <label htmlFor="c1" className="dc-label">Check this</label>
      </div>
      <div className="dc-column">
        <input type="checkbox" id="c4" className="dc-checkbox dc-checkbox--alt" />
        <label htmlFor="c4" className="dc-label">Check this</label>
        <input type="checkbox" id="c5" className="dc-checkbox dc-checkbox--alt" defaultChecked />
        <label htmlFor="c5" className="dc-label">Check that</label>
      </div>
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
