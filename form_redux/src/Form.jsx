import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { add_users, remove_users } from "./Redux/action";
import "./Form.css"; // Import the CSS file

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      add_users({
        id: uuid(),
        name: form.name,
        email: form.email,
      })
    );
    setForm({ name: "", email: "" }); // reset form
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="form">
        <div className="form-group">
          <label htmlFor="name">Enter Your Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter Your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputHandler}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {users && users.length > 0 && (
        <div className="table-wrapper">
          <h2>User List</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val) => (
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                    <button className="edit-btn">EDIT</button>
                    <button className="remove-btn" onClick={() => dispatch(remove_users(val.id))}>REMOVE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;
