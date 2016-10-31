import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="dc-row">
      <div className="dc-column">
        <ul className="dc-list">
          <li className="dc-list__item">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li className="dc-list__item">
            <Link to="/users" activeClassName="active">Users</Link>
          </li>
          <li className="dc-list__item">
            <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
