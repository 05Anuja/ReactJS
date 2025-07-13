import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForm,
  updateField,
  validateForm,
} from "../Redux_Toolkit/Features/FormSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { name, email, errors } = useSelector((state) => state.Form);

  const handleChange = (e) => {
    dispatch(
      updateField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());
    console.log(name, email)
  };

  // ✅ useEffect must be at top level
  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;
    if (isValid && (name !== "" || email !== "")) {
      alert("Form Submitted Successfully!");
      dispatch(clearForm());
    }
  }, [errors, dispatch, name, email]);

  return (
    <>
      <form onSubmit={formSubmit} noValidate>
        <div>
          <label htmlFor="name">Enter Your Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="email">Enter Your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
