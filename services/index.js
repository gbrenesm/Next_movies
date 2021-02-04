import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

export const getMovieData = () => {
  return axios.get(baseURL + '/moviedata')
}

export const getMovieDetail = movieid => {
  return axios.get(baseURL + `/moviedata/${movieid}`)
}

export const createMovie = movieData => {
  axios.post(baseURL + `/moviedata`, movieData)
}

export const getCategories = () => {
  return axios.get(baseURL + '/categories')
}