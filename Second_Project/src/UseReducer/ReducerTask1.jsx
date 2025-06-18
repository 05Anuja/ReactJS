import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return 0;
    }
}

const ReducerTask1 = () => {
  let initialstate = 0;
  const [counter, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default ReducerTask1;
