import * as types from '../constants/action.types';

const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USERS:
      return {
        ...state,
        users: action.users
      };

    default:
      return state;
  }
};

export default userReducer;
