import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user.actions';
import UserForm from './UserForm';

class ManageUserContainer extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
      errors: {}
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.setState({ user: Object.assign({}, nextProps.user) });
    }
  }

  updateUserState(event) {
    const field = event.target.id;
    let user = this.state.user;

    user[field] = event.target.value;

    return this.setState({ user })
  }

  saveUser(event) {
    const userId = this.props.user.id;
    let actions = this.props.actions;

    if (userId) {
      actions.updateUser(this.state.user);
    } else {
      actions.saveUser(this.state.user);
    }

    browserHistory.push('/users');
    event.preventDefault();
  }

  render() {
    return (
      <UserForm user={this.state.user}
                onSave={this.saveUser}
                onChange={this.updateUserState} />
    )
  }
}

ManageUserContainer.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// either get user based on `:id` in url or use initial
const getUser = (users, id) => {
  let initial = { id: '', firstName: '', lastName: '', email: '' };
  let user = users.filter(user => {
    return user.id === id;
  });

  return (user.length && user[0]) || initial;
};

const mapStateToProps = (state, ownProps) => {
  let user = getUser(state.users, +ownProps.params.id);  // ownProps.params.id from `/user/:id`
  return {
    user: user
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
)(ManageUserContainer);
