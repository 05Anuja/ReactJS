import React, { useContext, useState } from "react";
import { RegisterContext } from "./CreateRegister";

const UseRegister2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const { registerData } = useContext(RegisterContext);

  const getInputData = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value, // ✅ FIXED
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isMatch = registerData.some(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    setIsLoggedIn(isMatch);
  };

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

      {isLoggedIn !== null && (
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
          {isLoggedIn ? "✅ LogIn Successful" : "❌ LogIn Failed"}
        </div>
      )}
    </>
  );
};

export default UseRegister2;
