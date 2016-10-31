import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user.actions';
import TestForm from './TestForm';

export const TestContainer = (props) => {
  let user = props.user || { id: '', firstName: '', lastName: '', email: '' };

  return (
    <TestForm user={user}
              updateUserFormData={props.actions.updateUserFormData} />
  );
};

TestContainer.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.userReducer.users[0]
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);
