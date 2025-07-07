import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./Redux_Counter/action";

const Counter = () => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
};

export default Counter;
