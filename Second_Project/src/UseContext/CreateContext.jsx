import React, { createContext } from "react";

export const AuthContext = createContext();

const CreateContext = ({ children }) => {
  let name = "Anuja";
    let studObj = {
        name: "Aryan",
        age: 21,
    }
  return (
    <AuthContext.Provider value={{ name, studObj }}>{children}</AuthContext.Provider>
  );
};

export default CreateContext;
