import { useEffect, useState } from "react"
import { category, movieCard } from "../../utils/constants"
import { baseApi } from "../../api/axiosInstance"
import MovieList from "../../components/navbar/Home/MovieList"
import LoadMoreBth from "../../components/Button/LoadMoreBth"

interface PageType {
  [key: number]: number
}

function Movie() {

  const [filter, setFilter] = useState(category[0].name)
  const [nowPlaying, setNowPlaying] = useState<movieCard[]>([])
  const [popular, setPopular] = useState<movieCard[]>([])
  const [topRated, setTopRated] = useState<movieCard[]>([])
  const [upcoming, setUpcoming] = useState<movieCard[]>([])
  const [page, setPage] = useState<PageType>({ 0: 1, 1: 1, 2: 1, 3: 1 })
  const [pageComplete, setPageComplete] = useState<PageType>({ 0: 0, 1: 0, 2: 0, 3: 0 })

  const toggleSelection = (category: string) => {
    setFilter(category)
  }

  const fetchMovies = async (index: number, pageindex: number) => {
    try {
      console.log('fetch',pageComplete[index],pageindex)
      if (pageComplete[index] === pageindex) return

      const resp = await baseApi.get(`${category[index].endpoint}?language=en-US&page=${pageindex}`)
      // console.log(resp)

      switch (index) {
        case 0:
          setNowPlaying(prev => [...prev, ...resp.data.results])
          break;
        case 1:
          setPopular(prev => [...prev, ...resp.data.results])
          break;
        case 2:
          setTopRated(prev => [...prev, ...resp.data.results])
          break;
        case 3:
          setUpcoming(prev => [...prev, ...resp.data.results])
          break;
        default:
          break;
      }
      setPageComplete(prev=> ({...prev, [index]: pageindex}))






    } catch (error) {
      console.log('fetchMovies -> error', error)
    }
  }

  useEffect(() => {
    const current = category.findIndex((item) => item.name === filter)
    fetchMovies(current, 1)
    console.log('useEffect -> current', current)
  }, [filter])

  const handleLoadMore = async () => {
    const current = category.findIndex((item) => item.name === filter)
    try {
      setPage(prev=> ({...prev, [current]: prev[current] + 1}))
      fetchMovies(current, page[current] + 1)
    } catch (error) {
      console.log('handleLoadMore -> error', error)
    }
  }


  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">Explore Movie</h1>
      <div className="flex mt-2">
        {
          category.map((item, index) => (
            <div key={index} className="" >
              <button className="text-base font-semibold w-44 h-10 hover:bg-[#121212]"
                onClick={() => toggleSelection(item.name)}>{item.name}</button>
              {/* {filter === item.name && <div className="h-0.5  w-full bg-blue-400 mx-auto duration-200"></div>} */}

              <div className={`h-0.5 bg-blue-400 mx-auto ${filter === item.name ? 'w-full' : 'w-0'} duration-200`}></div>
            </div>
          ))
        }

      </div>
      {
        filter === 'Now Playing' && <MovieList movies={nowPlaying} title={filter} />
      }
      {
        filter === 'Popular' && <MovieList movies={popular} title={filter} />
      }
      {
        filter === 'Top Rated' && <MovieList movies={topRated} title={filter} />
      }
      {
        filter === 'Upcoming' && <MovieList movies={upcoming} title={filter} />
      }
      <div className="" onClick={() => handleLoadMore()}>
        <LoadMoreBth />
      </div>

    </div>
  )
}

export default Movie