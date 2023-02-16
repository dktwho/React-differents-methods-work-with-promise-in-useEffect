
import React from 'react'
import  './Album.css'

const Album = ({userId, id, title}) => {
  return (
    <div className='album'>
      <h3>userId: {userId}</h3>
      <h3>id: {id}</h3>
      <h3>title: {title}</h3>
      
    </div>
  )
}

export default Album
