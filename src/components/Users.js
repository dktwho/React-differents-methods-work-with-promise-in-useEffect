

import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const Users = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL2 = 'https://jsonplaceholder.typicode.com/users?_limit=3'

// **  useEffect с обычной функцией внутри 

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch(API_URL2)
      const users = await res.json()
      setUsers(users)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false) }
    fetchData()
  }, [])

  if(error) {
    return <h1>error {error}</h1>
  }

  return (
    <>
      <h1>Users</h1>
      <hr />
      {isLoading ? <h1>loading...</h1> : users.map((user) => {
        return <User key={user.id} {...user}/>
      })}
    </>
  )
}

export default Users
