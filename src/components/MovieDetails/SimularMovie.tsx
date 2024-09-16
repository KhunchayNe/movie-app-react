import { useEffect, useState } from "react"
import { baseApi } from "../../api/axiosInstance"
import { movieCard } from "../../utils/constants"
import MovieList from "../navbar/Home/MovieList"
import LoadMoreBth from "../Button/LoadMoreBth"

interface SimularMovieProps {
    id: number
}

function SimularMovie({ id }: SimularMovieProps) {
    const [movie, setMovie] = useState<movieCard[]>([])
    const [page, setPage] = useState(1)
    const [oldId, setOldId] = useState(0)

    const fetchSimilurMovies = async (page: number) => {
        if (oldId !== id) {
            setMovie([])
            setPage(1)
            setOldId(id)
        }
        try {
            const resp = await baseApi.get(`/movie/${id}/similar?language=en-US&page=${page}`)
            setMovie(prev => [...prev, ...resp.data.results])
            // console.log('fetchSimilurMovies -> resp', resp.data.results)
        } catch (error) {
            console.log('fetchSimilurMovies -> error', error)
        }
    }
    
    const handleLoadMore = () => {
        fetchSimilurMovies(page + 1)
        setPage(prev => prev + 1)
    }
    
    

    useEffect(() => {
        fetchSimilurMovies(1)
        setPage(prev => prev + 1)
    }, [id])

    return ( 
        <div>
            <MovieList movies={movie} title='Simular Movies' />
            <div className="" onClick={handleLoadMore}>
                <LoadMoreBth />
            </div>
        </div>
    )
}

export default SimularMovie