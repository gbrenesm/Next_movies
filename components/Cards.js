import React from 'react'

const Cards = ({movies}) => {

  const renderMovies = movies => {
    return movies?.map(movie => (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
          <div className="card-body">
            <h4 className="card-title"><a href="#">{movie.name}</a></h4>
            <h5>{movie.releaseYear}</h5>
            <p className="card-text">{movie.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>))
  } 
  return (
    <>
      { renderMovies(movies)}
    </>
  )
}

export default Cards
