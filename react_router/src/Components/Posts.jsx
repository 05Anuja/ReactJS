import React, { useEffect, useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData);
      });
  }, []);
  return (
    <>
      <div className="cards">
        {data.map((post, idx) => {
          return (
            <div key={idx} className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`}>Read More</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
