import * as types from '../constants/action.types';
import userApi from '../api/api.users';

export const updateUsers = (users) => {
  return { type: types.UPDATE_USERS, users };
};

const throwError = (error) => {
  throw error;
};

export const loadUsers = () => {
  return (dispatch) => {
    userApi.getUsers()
      .then(users => dispatch(updateUsers(users)))
      .catch(throwError);
  };
};

export const saveUser = (user) => {
  return (dispatch) => {
    userApi.createUser(user)
      .then(users => dispatch(updateUsers(users)))
      .catch(throwError);
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    userApi.updateUser(user)
      .then(users => dispatch(updateUsers(users)))
      .catch(throwError);
  };
};

export const updateUserFormData = (userData) => {
  return {
    type: types.UPDATE_USER_FORM_DATA,
    userData
  };
};
