import React, { useEffect, useState } from "react";

const ApiTesting = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/posts";
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      {/* {posts.map((post, idx) => (
        <div key={idx}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))} */}

      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </tr>
        </thead>
        <tbody>
        {posts.map((post, idx) => (
              <tr key={idx}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>  
        ))}
            </tbody>
      </table>
    </>
  );
};

export default ApiTesting;
