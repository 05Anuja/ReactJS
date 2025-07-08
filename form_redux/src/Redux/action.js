import { DETAILS } from "./actionTypes";

export const inputHandler = (fieldName, value) => ({
  type: DETAILS,
  payload: {
    fieldName: fieldName,
    value: value,
  }
});
