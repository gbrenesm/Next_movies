import { movies } from '../../../data/movies'

export default async (req, res) => {
  const httpMethod = req.method
  const { movieid } = req.query
  const { id, name, releaseYear, description, rating, genre, cover, image} = req.body
  const movie = movies.filter(movie => movie.id == movieid)

  
  switch(httpMethod) {
    case 'GET': 
      res.status(200).json(movie)
      break;
    case 'PUT':
      res.status(200).json({ id, name, releaseYear, description, rating, genre, cover, image})
      break;
    case 'DELETE':
      res.status(200).json(movie)
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${httpMethod} no allowed`)
  }
}