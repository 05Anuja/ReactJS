import React, { useContext } from 'react'
import { CreatePosts } from './CreatePost'

const ShowPosts = () => {
  const {post} = useContext(CreatePosts);
  return (
    <>
    {post.id}
    {post.title}
    </>
  )
}

export default ShowPosts