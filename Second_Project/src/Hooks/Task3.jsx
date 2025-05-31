import React, { useState } from "react";

function Task3() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        {loggedIn ? "Welcome Back!.." : "Please Login"}
      </h1>

      {loggedIn && (
        <p className="text-green-600 text-lg mb-4">Login successful</p>
      )}

      <button
        className={`px-6 py-2 text-white font-semibold rounded 
          ${loggedIn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
        onClick={handleLoginLogout}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Task3;
