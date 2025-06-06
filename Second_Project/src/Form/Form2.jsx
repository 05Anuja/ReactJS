import React, { useState } from 'react';

const Form2 = () => {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        mobNum: "",
        password: "",
    });

    const getInputData = (event) => {
        setFormData ((prevData) => ({...prevData, [event.target.name]: event.target.value}));
    }

    const FormSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <>
      <form onSubmit={FormSubmitHandler}>
        <h2 className="form-heading">User Registration</h2>

        <div className="form-group">
          <label htmlFor="fName">Enter First Name:</label>
          <input type="text" id="fName" name='fName' placeholder="First Name" onInput={getInputData} />
        </div>

        <div className="form-group">
          <label htmlFor="lName">Enter Last Name:</label>
          <input type="text" id="lName" name='lName' placeholder="Last Name" onInput={getInputData} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" name='email' placeholder="Email" onInput={getInputData} />
        </div>

        <div className="form-group">
          <label htmlFor="number">Enter Mobile Number:</label>
          <input type="number" id="number" name='mobNum' placeholder="Mobile Number" onInput={getInputData} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" id="password" name='password' placeholder="Password" onInput={getInputData} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form2;
