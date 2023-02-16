

import React from 'react'
import  './User.css'

const User = ({name, username, email}) => {

  return (
    <div className='user'>
      <h2>Name: {name}</h2>
      <p>Username: {username}</p>
      <h3>Email: {email}</h3>
    </div>
  )
}

export default User
