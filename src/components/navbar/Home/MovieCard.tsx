import { useState } from 'react'
import { imagepath, movieCard } from '../../../utils/constants'

interface MovieListProps {
    movie: movieCard
}

function MovieCard({ movie }: MovieListProps) {
    const [hover, setHover] = useState<number | null>(null)
    return (
        <div className="col" 
            onMouseEnter={() => setHover(movie.id)}
            onMouseLeave={() => setHover(null)}>
            <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden ${movie.id === hover ? 'scale-[104%]' : ''} duration-200`}>
                <div className="relative">
                    <img src={imagepath + movie?.poster_path} alt="" className='aspect-[3/4]' />
                    <div className="absolute bottom-0 w-full h-28 _carouselGradient"></div>
                </div>
                <div className="bg-[#222] p-2">
                    <h1 className={`text-[16px] font-semibold line-clamp-1  ${movie.id === hover ? 'underline' : ''}`}>{movie.title}</h1>
                    <div className="text-[15px] text-zinc-300 mt-2">
                        <h1 className=''>Rating : {String(movie?.vote_average).substring(0, 3)}</h1>
                        <h1 className=''>Language : {movie?.original_language}</h1>
                        <h1 className=''>Release : {movie?.release_date}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard