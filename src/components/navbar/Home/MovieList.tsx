import { imagepath, movieCard } from '../../../utils/constants'

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
                            <div className="col">
                                <div className="my-3 border-2 border-zinc-800 rounded-lg overflow-hidden" key={index}>
                                    <div className="relative">
                                        <img src={imagepath + movie?.poster_path} alt="" />
                                        <div className="absolute bottom-0 w-full h-28 _carouselGradient"></div>
                                    </div>
                                    <div className="bg-[#222] p-2">
                                        <h1 className='text-[16px] font-semibold line-clamp-1'>{movie.title}</h1>
                                        <div className="text-[15px] text-zinc-300 mt-2">
                                            <h1 className=''>Rating : {String(movie?.vote_average).substring(0, 3)}</h1>
                                            <h1 className=''>Language : {movie?.original_language}</h1>
                                            <h1 className=''>Release : {movie?.release_date}</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList