import { movieCard } from '../../../utils/constants'
import MovieCard from './MovieCard'

interface MovieListProps {
    movies: movieCard[]
}

function MovieList({ movies }: MovieListProps) {
    console.log(movies)
    return (
        <>
            <div className="m-14">
                <h1 className='text-xl font-bold text-yellow-500'>Top Rated Movies</h1>
                <div className="row row-cols-6">
                    {
                        movies.length > 0 && movies.map((movie, index) => (
                            <MovieCard movie={movie} key={index} />                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList