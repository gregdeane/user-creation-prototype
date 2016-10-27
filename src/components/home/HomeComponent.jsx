import React from 'react';
import { Link } from 'react-router';

const HomeComponent = () => {
  return (
    <div className="dc-row">
      <header className="dc-column">
        <h1>Home</h1>
        <Link to="about" className="dc-btn dc-btn--primary">
          Learn more
        </Link>
      </header>
    </div>
  );
};

export default HomeComponent;
