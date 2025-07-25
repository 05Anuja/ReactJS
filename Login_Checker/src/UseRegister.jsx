import React, { useContext, useState } from "react";
import { RegisterContext } from "./CreateRegister";

const UseRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const getInputData = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(formData);
  };

  const { registerData } = useContext(RegisterContext);
  return (
    <>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onInput={getInputData}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onInput={getInputData} />
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          onInput={getInputData}
        />
        <br /> <br />
        <button onClick={submitHandler}>LogIn</button>
      </form>

      {/* {formData.username === registerData.username && formData.password === registerData.password && formData.email == registerData.email ? "Login Successfull" : "Login Failed"} */}

      {isLoggedIn ? "Login Successfull" : "Login Failed! Please try again"}
    </>
  );
};

export default UseRegister;
