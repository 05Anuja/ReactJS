import React from 'react'

const Child2 = (props) => {
    // console.log(props.data.name)


  return (
    <>
    <button onClick={props.setData}>Update Data</button>
    {
        props.data && (
            <>
            <h1>Name: {props.data.name}</h1>
            <h1>Email: {props.data.email}</h1>
            </>
        )
    }
    </>
  )
}

export default Child2