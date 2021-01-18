import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getMovieDetail } from '../api/movies'

const Movie = () => {
  const [movie, setMovie] = useState(null)
  const router = useRouter()
  const { id } = router.query


  async function fetchData(movieId) {
    const movieData = await getMovieDetail(movieId)
    setMovie(movieData)
  }
  
  useEffect(() => {
    fetchData(id)
  }, [])

 

  return(
    <>
    {movie &&
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Title: { movie.name }</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4"/>
      </div>
   </div>}
   </>
  )
}

export default Movie

