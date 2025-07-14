import React from 'react'
import useCount from './UseCount'

const Counter = () => {
    const {count, incrementHandler, decrementHandler, resetHandler} = useCount()
  return (
    <>
        <p>Counter: {count}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button>
    </>
  )
}

export default Counter