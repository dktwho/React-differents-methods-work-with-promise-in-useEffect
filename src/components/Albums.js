import React, {useState, useEffect} from 'react'
import Album from './Album'

const Albums = () => {
  const [albums, setAlbums] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL3 = 'https://jsonplaceholder.typicode.com/albums?_limit=3'


//  !! useEffect через then

useEffect(() => {
  fetch(API_URL3)
    .then(response => response.json())
    .then(albums => setAlbums(albums))
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false))     
  }, [])


  if(error) {
    return <h1>error {error}</h1>
  }

  return (
    <>
      <h1>Albums</h1>
      <hr />
      {isLoading ? <h1>loading...</h1> : albums.map((album) => {
        return <Album key={album.id} {...album}/>
      })}
    </>
  )
}

export default Albums
