import React, { useContext } from 'react'
import { ThemeContext } from './CreateToggle'

const UseToggle = () => {
    const {theme, bgChanger} = useContext(ThemeContext);
  return (
    <>
        <div style={{backgroundColor: theme === 'light' ? 'white' : 'black', height: "100vh", width: "100%"}}>
            <button onClick={bgChanger} style={{height: "30px", width: "80px", outline: "none"}}>Click Me</button>
        </div>
    </>
  )
}

export default UseToggle