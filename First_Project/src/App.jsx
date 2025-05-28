import React, { use, useState } from 'react';

const App = () => {
  // const user = "Anuja";
  // const [user, setUser] = useState("Anuja");
  // const names = ["Aryan", "Vinish", "Sparsh", "Riyansh", "Saksham"];
  // const handleBtn = () => {
  //   const randomName = names[Math.floor(Math.random() * names.length)];
  //   setUser(randomName);
  // }

  // Forward Navigation 
  const names = ["Anuja", "Aryan", "Vinish", "Sparsh", "Saksham"];
  const [index, setIndex] = useState(0)

  const handleBtn = () => {
    setIndex((prevIdx) => (prevIdx + 1) % names.length);
  }

  // Backward Navigation
  // const names = ["Anuja", "Aryan", "Vinish", "Sparsh", "Saksham"];
  // const [index, setIndex] = useState(names.length-1);

  // const handleBtn = () => {
  //   setIndex((prevIdx) => (prevIdx - 1 + names.length) % names.length);
  // };


  return (
    <>
      <h1>Username: {names[index]}</h1>
      <button onClick={handleBtn}>Change the Username</button>
    </>
  )
}

export default App;



// Counter Project
// import React, { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)

//   const handleIncrement = () => {
//     setCount(count + 1);
//   }

//   const handleDecrement = () => {
//     setCount(count - 1);
//   }

//   return (
//     <>
//       <div id='countBtn'>Counter: {count}</div>
//       <div id="btns">
//         <button id='incrementBtn' onClick={handleIncrement}>Increment (+)</button>
//         <button id='decrementBtn' onClick={handleDecrement}>Decrement (-)</button>
//       </div>
//     </>
//   )
// }

// export default App