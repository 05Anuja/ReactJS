import React, { useContext } from "react";
import { UserContext } from "./CreateUser";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <>
      <div className="header">
        <h1>Welcome, {data.name}</h1>
      </div>
    </>
  );
};

export default Header;
