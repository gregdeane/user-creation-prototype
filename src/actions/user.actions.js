import * as types from '../constants/action.types';
import userApi from '../api/api.users';

export const updateUsers = (users) => {
  return { type: types.UPDATE_USERS, users };
};

export const loadUsers = () => {
  return (dispatch) => {
    userApi.getUsers()
      .then(users => dispatch(updateUsers(users)))
      .catch(error => {
        throw error;
      });
  };
};

export const saveUser = (user) => {
  return (dispatch) => {
    userApi.createUser(user)
      .then(users => dispatch(updateUsers(users)))
      .catch(error => {
        throw error;
      });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    userApi.updateUser(user)
      .then(users => dispatch(updateUsers(users)))
      .catch(error => {
        throw error;
      });
  };
};
