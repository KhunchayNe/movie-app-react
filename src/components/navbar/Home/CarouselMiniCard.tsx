import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselMovie, imagepath } from '../../../utils/constants'
import { FiThumbsUp } from 'react-icons/fi'

interface CarouselMiniCardProps {
    carouselMovies: CarouselMovie[]
    item: number
    index: number
}

function CarouselMiniCard({ carouselMovies, item, index }: CarouselMiniCardProps) {
    const [hover, setHover] = useState<number | null>(null)
    return (
        <Link to={`/details/${carouselMovies[item]?.id}`} key={index}>
            <div className="flex gap-2" key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}>
                <img src={imagepath + carouselMovies[item]?.poster_path} className="w-[100px]" alt="" />
                <div className="flex flex-col justify-between py-2">
                    <div className="leading-5">
                        <h1 className={`${hover == index ? 'underline' : ''}`}>{carouselMovies[item]?.title}</h1>
                        <h1 className="text-md line-clamp-3 text-zinc-300">{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className="flex gap-1 text-center">
                        <FiThumbsUp />
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default CarouselMiniCard