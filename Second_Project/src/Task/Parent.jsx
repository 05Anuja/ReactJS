import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const details = {
        name: "Anuja",
        email: "anuja@gmail.com",
    };

    const [data, setData] = useState(details);

    const updateData = () => {
        setData((prevData) => ({...prevData, name: "Aryan", email: "aryan@gmail.com"}))
        // alert("h")
    }
  return (
    <>
        <Child1 data = {data}/>
        <Child2 data = {data}  setData = {updateData}/>
    </>
  )
}

export default Parent