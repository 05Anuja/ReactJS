import React, { useContext } from "react";
import { CreateCart } from "./CreateContext";

const UseContext = () => {
  const { data } = useContext(CreateCart);

  return (
    <>
      <div className="card-container">
        {data.map((val) => (
             
          <div key={val.id} className="card">
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button className="cartBtn">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseContext;
