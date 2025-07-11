import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../Redux_toolkit/Features/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  // console.log(count)
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
};

export default Counter;
