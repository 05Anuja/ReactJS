import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="text-5xl text-center font-bold mt-44">Count: {count}</h1>
      <div className="flex items-center justify-center gap-10 mt-10">
        <button className="bg-blue-700 p-4 text-4xl rounded-xl" onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button className="bg-red-700 p-4 text-4xl rounded-xl" onClick={() => setCount(count - 1)}>Decrement (-)</button>
      </div>
    </>
  );
};

export default App;
