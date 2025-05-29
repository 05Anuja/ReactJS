import React from "react";

const App = () => {

  // const handleSubmitBtn = () => {
  //   alert("Form Submitted Successfully!!");
  // }

  const submtHandler = (e) => {
    e.preventDefault();
    console.log(e);
    // console.log("Hello", e);
  }

  return (
    <>
      <div className="w-screen h-screen bg-black text-white">
        <form onSubmit={(e) => {
          submtHandler(e);
        }} className="flex flex-col">
          <input
            type="text"
            id="fname"
            placeholder="Enter Your Name"
            className="bg-white text-black text-xl m-5 px-4 py-3 rounded w-80"
          />
          <button  className="px-4 py-3 m-5 bg-emerald-700 rounded text-2xl w-80 font-semibold">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
