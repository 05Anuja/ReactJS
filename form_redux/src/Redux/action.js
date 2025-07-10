import { ADD_USERS, REMOVE_USERS } from "./actionTypes";

export const add_users = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const remove_users = (id) => ({
  type: REMOVE_USERS,
  payload: id,
});