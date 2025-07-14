import axios from "axios";
import React, { useEffect, useState } from "react";

const APITesting2 = () => {
  const [post, setPost] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(api);
        setPost(res.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchPosts();
  }, []);

//   console.log(post)

  return (
    <>
        {post.map((val) => (
            <div key={val.id}>
                {val.title}
            </div>
        ))}
    </>
  );
};

export default APITesting2;
