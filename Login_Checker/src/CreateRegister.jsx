import React, { createContext } from 'react'
export const RegisterContext = createContext();

const CreateRegister = ({children}) => {
    const registerData = [
        {
            username: "Anuja",
            email: "anuja@gmail.com",
            password: "Anuja@1312",
        },
        {
            username: "Aryan",
            email: "aryan@gmail.com",
            password: "Aryan@0504",
        },
        {
            username: "Siddhi",
            email: "siddhi@gmail.com",
            password: "Siddhi@1712",
        },
        {
            username: "Kashti",
            email: "kashti@gmail.com",
            password: "Kashti@2903",
        }
    ];

    
  return (
    <>
        <RegisterContext.Provider value={{registerData}}>
            {children}
        </RegisterContext.Provider>
    </>
  )
}

export default CreateRegister