import { ADD_USERS, REMOVE_USERS } from "./actionTypes";

const initialState = {
  users: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_USERS:
        return {
            ...state, users: state.users.filter(user => user.id !== action.payload)
        };
    default:
      return state;
  }
};
