import React, { createContext, useEffect, useState } from "react";
export const CreateCart = createContext();

const CreateContext = ({children}) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/posts";
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        console.log(resData)
      });
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItem) => [...prevItem, item]);
  }

  // console.log(data)

  return (
    <>
    <CreateCart.Provider value={{data, cartItems, addToCart}}>
        {children}
    </CreateCart.Provider>
    </>
  );
};
export default CreateContext;