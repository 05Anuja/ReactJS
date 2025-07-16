import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux_toolkit/Features/ThemeSlice";

const Theme = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
//   console.log(mode);

  const themeStyles = {
    backgroundColor: mode === "light" ? "#f5f5f5" : "#1a1a1a",
    color: mode === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
        <div style={themeStyles}>
            <h1>{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                Switch to {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    </>
  );
};

export default Theme;
