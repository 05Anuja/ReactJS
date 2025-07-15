import React from "react";

const Task1 = () => {
  const name = "Anuja";
  const clickHandler = () => {
    alert("Button is Clicked!");
  };
  return (
    <>
      {/* Displaying a Name */}
      <h1>{name}</h1>
      {/* alert box when clicked on button */}
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
};

export default Task1;
