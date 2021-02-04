import { categories } from '../../data/categories'

export default async (req, res) => {
  res.status(200).json(categories)
}