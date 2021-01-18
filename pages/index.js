import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import { getMovieData } from './api/movies'

export default function Home({movies}) {

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
            <SideMenu/>
          </div>
          <div className="col-lg-9">
            <Carousel/>
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
  const data = await getMovieData()
  return {
    props: {movies: data},
  }
}