import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowPosts = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(api)
      .then((res) => res.json())
      .then((resData) => setPost(resData));
  }, [id]);

//   if (!post) return <p>Loading post...</p>; // Show loading state

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPosts;
