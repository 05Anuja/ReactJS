import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    return {
        ...state, [action.name] : action.value
    }
};

const ReducerForm = () => {
  const initialState = {
    name: "",
    number: "",
  };
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [formDetails, setFormDetails] = useState(null);

  const inputHandler = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormDetails(formData);
  };
  return (
    <>
      <form action="" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input type="text" id="name" name="name" onChange={inputHandler} />
        </div>
        <br />
        <div>
          <label htmlFor="number">Number:</label>
          <input type="number" id="number" name="number" onChange={inputHandler} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      {
        formDetails && (
            <>
                <h1>{`Name: ${formDetails.name}`}</h1>
                <h1>{`Number: ${formDetails.number}`}</h1>
            </>
        )
      }
    </>
  );
};

export default ReducerForm;
