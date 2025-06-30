import React from "react";
import './index.css'
import CreateContext from "./Shopping_Cart/CreateContext";
import UseContext from "./Shopping_Cart/UseContext";
import CartItems from "./Shopping_Cart/CartItems";

const App = () => {
  return (
    <>
      <CreateContext>
        <UseContext />
        <CartItems />
      </CreateContext>
    </>
  );
};

export default App;
