import React, { useState } from "react";

const LoggedUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <>
      <p>{isLoggedIn ? "Welcome" : "Please Login"}</p>
      <button onClick={loginHandler}>{isLoggedIn ? "LogOut" : "LogIn"}</button>
    </>
  );
};

export default LoggedUser;
