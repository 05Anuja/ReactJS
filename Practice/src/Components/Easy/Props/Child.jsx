import React from 'react'

const Child = (props) => {
  return (
    <>
    <p>Child Components</p>
    {/* accessing parent's data using props */}
    <h4>I am {props.name} and I am {props.age} years old.</h4>
    </>
  )
}

export default Child