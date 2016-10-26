import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user.actions';

class UserComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { name: '' }
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({ user: user });
  }

  onClickSave() {
    this.props.actions.createUser(this.state.user);
  }

  userRow(user, index) {
    return <div key={index}>{user.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Users</h1>

        {this.props.users.map(this.userRow)}

        <h2>Add User</h2>
        <form>
          <div>
            <label htmlFor="user-name">User Name</label>
            <input type="text"
                   id="user-name"
                   onChange={this.onNameChange} />
          </div>
          <button type="button"
                  onClick={this.onClickSave}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

UserComponent.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// `state.users` because alias `users` is used in `combineReducers` (reducers/index.js)
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
