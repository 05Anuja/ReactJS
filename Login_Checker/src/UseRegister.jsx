import React, { useContext, useState } from "react";
import { RegisterContext } from "./CreateRegister";

const UseRegister = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const getInputData = (event) => {
        setFormData((prevData) => ({...prevData, [event.target.name] : [event.target.value]}));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    }
  const { registerData } = useContext(RegisterContext);
  return (
    <>
      <div>
        {registerData.map((user, idx) => (
          <div key={idx}>{/* <p>{user.username}</p> */}</div>
        ))}
      </div>

      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" onInput={getInputData}/>
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" onInput={getInputData}/>
        <br /> <br />
        <button onClick={submitHandler}>LogIn</button>
      </form>
    </>
  );
};

export default UseRegister;
