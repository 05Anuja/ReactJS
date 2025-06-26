import React, { useContext } from "react";
import { UserContext } from "./CreateUser";

const ProfileCard2 = () => {
  const { data, handleInput, handleSubmit } = useContext(UserContext);
  return (
    <>
      <div className="profile-card">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleInput}/>
            <br /> <br />
            <input type="number" name="age" id="age" placeholder="Age" onChange={handleInput}/>
            <br /> <br />
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleInput}/>
            <br /> <br />
            <button type="submit">Submit</button>
          </form>
        </div>
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

export default ProfileCard2;
