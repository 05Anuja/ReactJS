import React, { createContext, useEffect, useState } from "react";
export const CreateCart = createContext();

const CreateContext = ({children}) => {
  const [data, setData] = useState([]);

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

  // console.log(data)

  return (
    <>
    <CreateCart.Provider value={{data}}>
        {children}
    </CreateCart.Provider>
    </>
  );
};
export default CreateContext;