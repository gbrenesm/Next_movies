const category_data = [
  {id: 'c-1', name: 'Drama'},
  {id: 'c-2', name: 'Action'},
  {id: 'c-3', name: 'Adventure'},
  {id: 'c-4', name: 'Historical'},
  {id: 'c-5', name: "Music"}
]

export const getMovieData = () => {
  return new Promise((resolve, reject) => {
    resolve(movie_data)
  })
}

export const getMovieDetail = movieId => {
  return new Promise((resolve, reject) => {
    const movieIndex = movie_data.findIndex(movie => movie.id === movieId)
    resolve(movie_data[movieIndex])
  })
}

export const createMovie = movie => {
  return new Promise((resolve, reject) => {
    movie.id = Math.random().toString(36).substr(2, 7)
    movie_data.push(movie)
    resolve(movie_data)
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(category_data)
  })
}