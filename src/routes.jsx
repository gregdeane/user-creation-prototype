import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import UserContainer from './components/user/UserContainer';
import ManageUserContainer from './components/user/ManageUserContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="users" component={UserContainer} />
    <Route path="user" component={ManageUserContainer} />
    <Route path="user/:id" component={ManageUserContainer} />
    <Route path="about" component={AboutComponent} />
  </Route>
);
