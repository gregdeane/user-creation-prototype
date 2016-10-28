import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/ButtonInput';
import UserDetailsForm from './UserDetailsForm';
import Applications from '../applications/Applications';

const UserForm = ({ user, onSave, onChange }) => {
  return(
    <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
      <UserDetailsForm heading="New User"
                       user={user}
                       onChange={onChange}
                       onSave={onSave} />
      <div className="dc-column temp-border hide">
        {/*<h1>Extra Permissions</h1>*/}
        <ul>
          <li>
            <input type="checkbox" className="dc-checkbox" id="works-at-zalando" />
            <label htmlFor="works-at-zalando" className="dc-label">Works at Zalando</label>
            <div className="dc-label--help-text">Can view, edit, and create internal Zalando users</div>
          </li>
          <li>
            <input type="checkbox" className="dc-checkbox" id="all-partners-and-apps" />
            <label htmlFor="all-partners-and-apps" className="dc-label">All business partners & apps</label>
            <div className="dc-label--help-text">This user will receive all new business partner and apps</div>
          </li>
          <li>
            <input type="checkbox" className="dc-checkbox" id="team-norris" />
            <label htmlFor="team-norris" className="dc-label">Team Norris</label>
            <div className="dc-label--help-text">This user will have Chuck Norris's powers and beauty</div>
          </li>
          <li>
            <input type="checkbox" className="dc-checkbox" id="user-management" />
            <label htmlFor="user-management" className="dc-label">User Management</label>
            <div className="dc-label--help-text">This user willl be able to create, edit and delete users</div>
          </li>
        </ul>
      </div>
      <div className="dc-column temp-border hide">
        <h1>Business Partners & Apps</h1>
        <TextInput name="search"
                   placeholder="Add a business partner..."
                   onChange={onChange} />
      </div>
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
