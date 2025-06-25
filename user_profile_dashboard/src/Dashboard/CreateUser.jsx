import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const CreateUser = ({children}) => {
    const [data, setData] = useState({
        name: "Anuja",
        age: "21",
        email: "anuja@gmail.com",
    });
  return (
    <>
        <UserContext value={{data}}>
            {children}
        </UserContext>
    </>
  )
}

export default CreateUser