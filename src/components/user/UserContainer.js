import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import UserList from './UserList';
import ButtonInput from '../common/ButtonInput';

class UserContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.showAddUser = this.showAddUser.bind(this);
  }

  showAddUser() {
    browserHistory.push('/user');
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ButtonInput type="submit"
                     label="Add User"
                     onClick={this.showAddUser} />
        <UserList users={this.props.users} />
      </div>
    );
  }
}

UserContainer.propTypes = {
  users: PropTypes.array.isRequired
};

// `state.data` because alias `data` is used in `combineReducers` (reducers/index.js)
const mapStateToProps = (state) => ({
  users: state.userReducer.users
});

export default connect(
  mapStateToProps
)(UserContainer);
