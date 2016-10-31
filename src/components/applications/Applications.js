import React, { PropTypes } from 'react';

const Applications = ({ heading }) => {
  return (
    <div className="dc-column applications temp-border">
      <h1>{heading}</h1>
      <ul className="dc-list dc-list--is-scrollable sg-icons">
        <li className="dc-list__item dc-list__item--is-interactive">CMS</li>
        <li className="dc-list__item dc-list__item--is-interactive">Analytics</li>
        <li className="dc-list__item dc-list__item--is-interactive">ACT</li>
      </ul>
    </div>
  );
};

Applications.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Applications;
