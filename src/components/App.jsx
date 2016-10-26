import React, { PropTypes } from 'react';

import HeaderComponent from './common/HeaderComponent';

const App = (props) => {
  return(
    <div>
      <HeaderComponent />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
