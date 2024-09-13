import { useEffect, useState } from "react"
import { baseApi } from "../../api/axiosInstance"
import HomeSlider from "../../components/navbar/Home/HomeSlider"
import { movieCard } from "../../utils/constants"
import MovieList from "../../components/navbar/Home/MovieList"
import LoadMoreBth from "../../components/Button/LoadMoreBth"

function Home() {
  const [movies, setMovies] = useState<movieCard[]>([])

  const fetchMovies = async () => {
    try {
      const res = await baseApi.get('/movie/top_rated?language=en-US&page=1')
      setMovies(res.data.results)
    } catch (error) {
      console.log('There was an error fetching the top rated movies', error)
    }
  }

  useEffect(() => {fetchMovies()}, [])
  return (
    <>
    <div className="w-[90%] mx-auto mb-44">      
      <HomeSlider />
      <MovieList movies={movies} />
      <LoadMoreBth />
    </div>
    </>
  )
}

export default Home