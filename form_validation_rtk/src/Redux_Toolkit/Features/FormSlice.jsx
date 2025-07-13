import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  errors: {},
};

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    validateForm: (state) => {
      const errors = {};
      if (!state.name.trim()) errors.name = "Name is required!";
      if (!state.email.trim()) {
        errors.email = "Email is required!";
      } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        errors.email = "Email is not valid. Ex- abc@gmail.com";
      }
      state.errors = errors;
    },
    clearForm: () => initialState,
  },
});

export const {updateField, validateForm, clearForm} = FormSlice.actions;
export default FormSlice.reducer;
