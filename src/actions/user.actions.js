import * as types from '../constants/action.types';
import userApi from '../api/api.users';

export const loadUsersSuccess = (users) => {
  return { type: types.LOAD_USERS_SUCCESS, users };
};

export const createUserSuccess = (user) => {
  return { type: types.CREATE_USER_SUCCESS, user };
};

export const updateUserSuccess = (user) => {
  return { type: types.UPDATE_USER_SUCCESS, user };
};

export const loadUsers = () => {
  return (dispatch) => {
    userApi.getUsers()
      .then(users => dispatch(loadUsersSuccess(users)))
      .catch(error => {
        throw error;
      });
  };
};

export const saveUser = (user) => {
  return (dispatch) => {
    userApi.createUser(user)
      .then(user => dispatch(createUserSuccess(user)))
      .catch(error => {
        throw error;
      });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    userApi.updateUser(user)
      .then(user => dispatch(updateUserSuccess(user)))
      .catch(error => {
        throw error;
      });
  };
};
