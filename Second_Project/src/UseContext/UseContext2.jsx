import React, { useContext } from 'react'
import { AuthContext } from './CreateContext'

const UseContext2 = () => {
    let {name} = useContext(AuthContext);
  return (
    <>
        <h1>{name}</h1>
    </>
  )
}

export default UseContext2