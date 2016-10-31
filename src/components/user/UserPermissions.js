import React, { PropTypes } from 'react';

const UserPermissions = ({ heading }) => {
  return (
    <div className="dc-column temp-border">
      <h1>{heading}</h1>
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
  );
};

UserPermissions.propTypes = {
  heading: PropTypes.string.isRequired
};

export default UserPermissions;
