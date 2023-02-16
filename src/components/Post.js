
import React from 'react'
import  './Post.css'

const Post = ({id, userId, title, body}) => {
  return (
    <div className='post'>
      <small>Id post: {id}</small>
      <h2>Title: {title}</h2>
      <p>{body}</p>
      <h3>UserId: {userId}</h3>
    </div>
  )
}

export default Post
