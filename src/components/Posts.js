
import React, {useEffect, useState} from 'react'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

 // ?? IIFE
 
 useEffect(() => {
  (async function fetchData() {
  try {
    const res = await fetch(API_URL)
    const posts = await res.json()
    setPosts(posts)
  } catch (error) {
    setError(error.message)
  }
  setIsLoading(false) })
  ()
}, [])


  if(error) {
    return <h1>error {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? <h1>Loading...</h1> : posts.map((post) => {
        return  <Post key={post.id} {...post}  />
      })}  
    </>
  )
}

export default Posts
