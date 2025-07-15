import React from 'react'
import Child from './Child';

const Parent = () => {
    const name = "Anuja";
    const age = 22;
  return (
    <>
    <p>Parent Component</p>
    <p>{name} and {age}</p>
    {/* Passing data to child component using props */}
    <Child name= {name} age = {age}/>
    </>
  )
}

export default Parent