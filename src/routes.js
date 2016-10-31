import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import UserContainer from './components/user/UserContainer';
import ManageUserContainer from './components/user/ManageUserContainer';
import TestContainer from './components/user/TestContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="users" component={UserContainer} />
    <Route path="user" component={ManageUserContainer} />
    <Route path="user/:id" component={ManageUserContainer} />
    <Route path="test" component={TestContainer} />
    <Route path="about" component={About} />
  </Route>
);
