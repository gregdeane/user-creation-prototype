import * as types from '../constants/action.types';

export const createUser = (user) => {
  return {
    type: types.CREATE_USER,
    user
  };
};
