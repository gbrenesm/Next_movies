import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';

// Import services
import { getMovieData, getCategories } from '../services/index'

export default function Home({movies, images, categories}) {

  // Ther's different ways to get the info from the API:  // 
  // 1. Usign useState and useEffect

  // const [movies, setMovies] = useState([])
    
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //    const movieData = await getMovieData()
  //    setMovies(movieData)
  //   } 
  //   fetchMovies()
  // }, [])
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu categories={categories}/>
          </div>
          <div className="col-lg-9">
            <Carousel images={images}/>
            <div className="row">
              <Cards movies={movies}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const movies = await getMovieData()
  const movieImages = movies.data?.map(movie => ({
    id: `image${movie.id}`,
    url: movie.cover,
    name: movie.name
  }))
  
  const categoriesData = await getCategories()

  return {
    props: {movies: movies.data,
            images: movieImages,
            categories: categoriesData.data},
  }
}