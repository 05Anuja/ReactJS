import React from "react";
import './index.css'
import CreateContext from "./Shopping_Cart/CreateContext";
import UseContext from "./Shopping_Cart/UseContext";

const App = () => {
  return (
    <>
      <CreateContext>
        <UseContext />
      </CreateContext>
    </>
  );
};

export default App;
