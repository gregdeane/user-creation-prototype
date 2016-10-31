import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr className="dc-table__tr dc-table__tr--interactive">
      <td className="dc-table__td"><Link to={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link></td>
      <td className="dc-table__td">{user.email}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
