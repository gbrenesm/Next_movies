import { movies }from '../../../movies'

// export default async (req, res) => {
//   res.status(200).json(movies)
// }

export default async (req, res) => {
  const httpMethod = req.method
  const { id, name, releaseYear, description, rating, genre, cover, image} = req.body

  switch(httpMethod) {
    case 'GET':
      res.status(200).json(movies)
      break;
    case 'POST':
      res.status(200).json( {id, name, releaseYear, description, rating, genre, cover, image})
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${httpMethod} no allowed`)
  }
}