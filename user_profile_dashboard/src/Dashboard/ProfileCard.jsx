import React, { useContext } from "react";
import { UserContext } from "./CreateUser";

const ProfileCard = () => {
  const { data } = useContext(UserContext);
  return (
    <>
      <div className="profile-card">
        <div className="profile-container">
          <h3>Profile Card</h3>
          <p>
            <strong>Name: {data.name}</strong>
          </p>
          <p>
            <strong>Email: {data.email}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
