import React, { useContext } from "react";
import { UserContext } from "./CreateUser";

const Sidebar = () => {
  const { data } = useContext(UserContext);
  return (
    <>
      <div className="sidebar">
        <h3>Sidebar</h3>
        <h4>
          <strong>Name: {data.name}</strong>
        </h4>
        <h4>
          <strong>Age: {data.age}</strong>
        </h4>
        <h4>
          <strong>Email: {data.email}</strong>
        </h4>
      </div>
    </>
  );
};

export default Sidebar;
