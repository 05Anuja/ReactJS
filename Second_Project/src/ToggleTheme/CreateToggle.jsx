import React, { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();

const CreateToggle = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const bgChanger = () => {
    setTheme((prevColor) => prevColor === 'light' ? 'dark' : 'light');
  } 

  return (
    <>
      <ThemeContext.Provider value={{theme, bgChanger}}>{children}</ThemeContext.Provider>
    </>
  );
};

export default CreateToggle;
