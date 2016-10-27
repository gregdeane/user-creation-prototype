import React, { PropTypes } from 'react';

import UserListRow from './UserListRow';

const UserList = ({users}) => {
  return (
    <table className="dc-table">
      <thead className="dc-table__thead">
        <tr className="dc-table__tr dc-table__tr--interactive">
          <th className="dc-table__th">Name</th>
          <th className="dc-table__th">Email</th>
        </tr>
      </thead>
      <tbody className="dc-table__tbody">
        {users.map(user =>
          <UserListRow key={user.id} user={user} />
        )}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
