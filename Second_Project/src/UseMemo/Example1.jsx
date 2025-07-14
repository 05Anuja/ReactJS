import React, { useMemo, useState } from "react";

const Example1 = () => {
  const dataSet = [
    {
      id: 1,
      product: "Mobile",
      category: "Electronics",
    },
    {
      id: 2,
      product: "Pen",
      category: "Stationary",
    },
    {
      id: 3,
      product: "Atomic Habbits",
      category: "Books",
    },
    {
      id: 4,
      product: "T-Shirt",
      category: "Clothes",
    },
    {
      id: 5,
      product: "Keyboard",
      category: "Electronics",
    },
    {
      id: 6,
      product: "The Power of Now",
      category: "Books",
    },
    {
      id: 7,
      product: "Mobile",
      category: "Electronics",
    },
    {
      id: 8,
      product: "Pen",
      category: "Stationary",
    },
    {
      id: 9,
      product: "Atomic Habbits",
      category: "Books",
    },
    {
      id: 10,
      product: "T-Shirt",
      category: "Clothes",
    },
    {
      id: 11,
      product: "Keyboard",
      category: "Electronics",
    },
    {
      id: 12,
      product: "The Power of Now",
      category: "Books",
    },
    {
      id: 13,
      product: "Pen",
      category: "Stationary",
    },
    {
      id: 14,
      product: "Atomic Habbits",
      category: "Books",
    },
    {
      id: 15,
      product: "T-Shirt",
      category: "Clothes",
    },
    {
      id: 16,
      product: "Keyboard",
      category: "Electronics",
    },
    {
      id: 17,
      product: "The Power of Now",
      category: "Books",
    },
  ];

  const [search, setSearch] = useState([]);

  const filterDataSet = useMemo(() => {
    return dataSet.filter((data) => {
      switch (search) {
        case "all":
          return data;
          break;
        case "electronics":
          return data.category.toLowerCase().includes(search.toLowerCase());
          break;
        case "books":
          return data.category.toLowerCase().includes(search.toLowerCase());
          break;
        case "stationary":
          return data.category.toLowerCase().includes(search.toLowerCase());
          break;
        case "clothes":
          return data.category.toLowerCase().includes(search.toLowerCase());
          break;
        default:
          return data;
      }
    });
  }, [search]);

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filterDataSet.map((data, idx) => (
        <div key={idx}>
          <h1>{data.id}</h1>
          <h3>{data.product}</h3>
          <p>{data.category}</p>
        </div>
      ))}
    </>
  );
};

export default Example1;
