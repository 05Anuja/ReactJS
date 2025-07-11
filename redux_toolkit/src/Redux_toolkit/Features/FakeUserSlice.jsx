import { createSlice } from "@reduxjs/toolkit";

const FakeUserSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    add_user: (state, action) => {
      state.users.push(action.payload);
    },

    remove_all_users: (state) => {
      state.users = [];
    },

    remove_users: (state, action) => {
      const userToRemove = action.payload;
      state.users = state.users.filter(
        (user) =>
          user.email !== userToRemove.email ||
          user.name !== userToRemove.name ||
          user.city !== userToRemove.city
      );
    },
  },
});

export const { add_user, remove_all_users, remove_users } =
  FakeUserSlice.actions;
export default FakeUserSlice.reducer;
