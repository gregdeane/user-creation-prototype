import React, { PropTypes } from 'react';

import UserListRow from './UserListRow';

const UserList = ({users}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <UserListRow key={user.id} user={user} />
          )}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
