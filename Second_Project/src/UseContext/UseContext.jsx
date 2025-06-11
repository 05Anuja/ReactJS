import React, { useContext } from 'react'
import { AuthContext } from './CreateContext'

const UseContext = () => {
    let {name, studObj} = useContext(AuthContext);
  return (
    <>
        <h1>{name}</h1>
        <h1>{studObj.name}</h1>
        <h1>{studObj.age}</h1>
    </>
  )
}

export default UseContext