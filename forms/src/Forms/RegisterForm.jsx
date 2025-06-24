import React, { useState } from "react";
import "../index.css";

const RegisterForm = () => {
  const [submitData, setSubmitData] = useState({});

  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    const dataObj = {
        fName: data.fName,
        lName: data.lName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
    }
    setSubmitData(dataObj);
    console.log(submitData);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h3>REGISTRATION FORM</h3>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input type="text" name="fName" value={data.fName} id="fName" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input type="text" name="lName" value={data.lName} id="lName" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={data.email} id="email" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            id="password"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            value={data.confirmPassword}
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitData && (
        <>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submitData.fName}</td>
                <td>{submitData.lName}</td>
                <td>{submitData.email}</td>
                <td>{submitData.password}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default RegisterForm;
