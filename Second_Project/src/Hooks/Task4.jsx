import React, { useState } from "react";
import '../index.css'; // ✅ Import your CSS file

function Task4() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="container">
      <h1 className="heading">{loggedIn ? "Welcome Back!.." : "Please Login"}</h1>

      {loggedIn && <p className="success">Login successful</p>}

      <button
        className={`button ${loggedIn ? "logout" : "login"}`}
        onClick={handleLoginLogout}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Task4;
