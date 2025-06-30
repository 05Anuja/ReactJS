import React, { useContext } from "react";
import { CreateCart } from "./CreateContext";

const CartItems = () => {
  const { cartItems } = useContext(CreateCart);
  return (
    <>
      <h2>Cart Items: {cartItems.length}</h2>
      <div className="card-container">
        {cartItems.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItems;
