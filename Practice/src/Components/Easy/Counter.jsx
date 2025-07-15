import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }
    const decrementHandler = () => {
        setCount(count - 1);
    }
    const resetHandler = () => {
        setCount(0)
    }
  return (
    // Counter with increment, decrement and reset functionality
    <>
        <h1>Counter: {count}</h1>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
    </>
  )
}

export default Counter