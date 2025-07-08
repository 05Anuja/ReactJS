import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inputHandler} from './Redux/action.js'

const Form = () => {
    const dispatch = useDispatch();
    const {name, email} = useSelector((state) => ({
      name: state.name,
      email: state.email,
    }));

    const handleChange = (e) => {
      dispatch(inputHandler(e.target.name, e.target.value));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted", name, email);
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        <br /> <br />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form