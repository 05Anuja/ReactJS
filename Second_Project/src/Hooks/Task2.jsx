import React, { useState } from "react";

const Task2 = () => {
  const [color, setColor] = useState();
  return (
    <>
      <div
        className="h-screen p-10 w-screen"
        style={{ backgroundColor: `${color}` }}
      >
        <button
          type="button"
          className="m-1.5 uppercase border-2 w-20 rounded p-1.5 bg-red-700"
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          type="button"
          className="m-1.5 uppercase border-2 w-20 rounded p-1.5 bg-blue-700"
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          type="button"
          className="m-1.5 uppercase border-2 w-20 rounded p-1.5 bg-yellow-300"
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          type="button"
          className="m-1.5 uppercase border-2 w-20 rounded p-1.5 bg-green-700"
          onClick={() => setColor("green")}
        >
          green
        </button>
      </div>
    </>
  );
};

export default Task2;
