import React, { useState } from "react";

const Form = () => {
  const [fName, setFName] = useState();
  const [lastName, setLastName] = useState();
  const [Password, setPassword] = useState();

  const getFName = (event) => {
    let firstName = event.target.value;
    // console.log(firstName);
    setFName(firstName);
  };

  const getLastName = (event) => {
    let lastName = event.target.value;
    setLastName(lastName);
  };

  const password = (event) => {
    let password = event.target.value;
    setPassword(password);
  }

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name- ${fName}`);
    console.log(`Last Name- ${lastName}`);
    console.log(`Password- ${Password}`);
  };
  return (
    <>
      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder="First Name"
          onInput={getFName}
        />
        <br />
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Last Name"
          onInput={getLastName}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onInput={password}
        />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
