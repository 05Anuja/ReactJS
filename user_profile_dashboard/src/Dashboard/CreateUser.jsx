import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const CreateUser = ({children}) => {
    // const [data, setData] = useState({
    //     name: "Anuja",
    //     age: "21",
    //     email: "anuja@gmail.com",
    // });

    const [data, setData] = useState({
      name: "",
      age: "",
      email: "",
    });

    const handleInput = (e) => {
      const {name, value} = e.target;
      setData((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
    }
  return (
    <>
        <UserContext value={{data, handleInput, handleSubmit}} >
            {children}
        </UserContext>
    </>
  )
}

export default CreateUser