import React, { useEffect } from "react";

const CreateCart = () => {
  const api = "https://cart-wb5t.onrender.com/api/products/";
  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);

  return <></>;
};

export default CreateCart;
