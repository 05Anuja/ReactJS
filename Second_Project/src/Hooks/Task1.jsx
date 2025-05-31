import React, { useState } from "react";

const Task1 = () => {
  const colors = ["red", "blue", "orange", "crimson", "purple", "black"];
  const [index, setIndex] = useState(0);

  const colorHandler = () => {
    setIndex((preVal) => (preVal + 1) % colors.length);
  };

  return (
    <>
      <div
        className="h-screen w-screen"
        style={{ backgroundColor: `${colors[index]}` }}
      >
        <button
          type="button"
          className="rounded m-2.5 p-2.5 w-28 bg-white uppercase"
          onClick={colorHandler}
        >
          {/* Change the Color */}
          {colors[index]}
        </button>
      </div>
    </>
  );
};

export default Task1;
