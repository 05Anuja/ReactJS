import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_user,
  remove_all_users,
  remove_users,
} from "../Redux_toolkit/Features/FakeUserSlice";
import { fakeUserFunc } from "../Redux_toolkit/Features/FakeUserFunc";

const FakeUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleRemove = (user) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );
    if (confirmDelete) {
      dispatch(remove_users(user));
    }
  };

  return (
    <>
      <button onClick={() => dispatch(add_user(fakeUserFunc()))}>
        ADD USER
      </button>

      {users && users.length > 0 && (
        <>
          <button onClick={() => dispatch(remove_all_users())}>
            REMOVE ALL USERS
          </button>

          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>
                    <button onClick={() => handleRemove(user)}>
                      REMOVE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default FakeUsers;
