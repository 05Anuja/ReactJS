import React, { useReducer, useState } from "react";
import "../index.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "DETAILS":
      const details = {
        ...state,
        [action.name]: action.value,
        errors: {
          ...state.errors,
          [action.name]: "",
        },
      };
      // console.log("State ", ...state.name);
      // console.log("State Errors", ...state.errors);
      return details;
    case "SET_ERRORS":
      const setErrors = {
        ...state,
        errors: action.errors,
      };
      console.log("Errors", action.errors);
      return setErrors;
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
};

const ReducerForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    errors: {
      name: "",
      email: "",
      password: "",
    },
  };
  const [formData, dispatch] = useReducer(reducer, initialState);
  // const [formDetails, setFormDetails] = useState(null);

  const inputHandler = (e) => {
    dispatch({ type: "DETAILS", name: e.target.name, value: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFormDetails(formData);
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (formData.name === "") {
      errors.name = "This field is required";
    }

    if (formData.email === "") {
      errors.email = "This field is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid Email Format. Ex. 'test@email.com'";
    }

    if (formData.password === "") {
      errors.password = "This field is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be at least 8 characters and include uppercase, number, and special character";
    }

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        errors,
      });
    } else {
      console.log("Form Submitted Successfully!");
      dispatch({type: "RESET_FORM", payload: initialState});
    }
  };
  return (
    <>
      <form action="" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Enter Your Full Name:</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={inputHandler} 
          value={formData.name}
          />
          {formData.errors.name && (
            <small style={{ color: "red" }}>{formData.errors.name}</small>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="email">Enter Your Email:</label>
          <input 
          type="text" 
          id="email" 
          name="email" 
          onChange={inputHandler} 
          value={formData.email}
          />
          {formData.errors.email && (
            <small style={{ color: "red" }}>{formData.errors.email}</small>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={inputHandler}
            value={formData.password}
          />
          {formData.errors.password && (
            <small style={{ color: "red" }}>{formData.errors.password}</small>
          )}
        </div>
        <br />
        <button>Submit</button>
      </form>
      {/* {formDetails && (
        <>
          <h1>{`Name: ${formDetails.name}`}</h1>
          <h1>{`Number: ${formDetails.email}`}</h1>
        </>
      )} */}
    </>
  );
};

export default ReducerForm;
