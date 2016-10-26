import React from 'react';
import { Link } from 'react-router';

const HomeComponent = () => {
  return (
    <div>
      <p>Home Component</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomeComponent;
