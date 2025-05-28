// import React, { use, useState } from 'react';

// const App = () => {
//   // const user = "Anuja";
//   const [user, setUser] = useState("Anuja")
  
//   const handleBtn = () => {
//     setUser("Aryan");
//   }


//   return (
//     <>
//       <h1>Username: {user}</h1>
//       <button onClick={handleBtn}>Change the Username</button>
//     </>
//   )
// }

// export default App;

import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div id='countBtn'>Counter: {count}</div>
      <div id="btns">
        <button id='incrementBtn' onClick={handleIncrement}>Increment (+)</button>
        <button id='decrementBtn' onClick={handleDecrement}>Decrement (-)</button>
      </div>
    </>
  )
}

export default App