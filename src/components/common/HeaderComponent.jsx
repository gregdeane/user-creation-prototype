import React from 'react';
import { Link, IndexLink } from 'react-router';

const HeaderComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li>
          <Link to="/users" activeClassName="active">Users</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
