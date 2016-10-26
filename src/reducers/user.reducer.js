import * as types from '../constants/action.types';

const userReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    default:
      return state;
  }
};

export default userReducer;
