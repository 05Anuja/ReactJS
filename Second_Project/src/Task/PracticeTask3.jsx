import React, { useState } from "react";

const PracticeTask3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <button onClick={checkLogIn}>{isLoggedIn ? "LogOut" : "LogIn"}</button>
      {isLoggedIn ? "Welcome Back..!" : "Please Login"}
    </>
  );
};

export default PracticeTask3;
