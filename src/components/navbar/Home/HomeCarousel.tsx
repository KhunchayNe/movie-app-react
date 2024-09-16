
import { Link } from 'react-router-dom'
import { CarouselMovie, imagepath } from '../../../utils/constants'
import { FiThumbsUp } from 'react-icons/fi'

interface carouselMovies {
    carouselMovies: CarouselMovie[]
}

function HomeCarousel({ carouselMovies }: carouselMovies) {
    return (
        <>
            <div className="carousel-inner">
                {
                    carouselMovies.map((movie: any, index: any) => (
                        <Link to={`/details/${movie.id}`} key={index}>
                            <div className={`carousel-item ${index == 0 ? 'active' : ''}`} key={index}>
                                <div className='relative'>
                                    {/* <div className='block w-[900px] bg-red-300 aspect-[7/4]'></div> */}
                                    <img src={imagepath + movie?.backdrop_path} className='w-full aspect-[7/4]' alt="" />
                                    {/* <div className="absolute w-full h-full top-0 left-0 bg-black"></div> */}
                                    <div className='absolute bottom-0 h-44 w-full _carouselGradient'></div>
                                </div><div className="absolute bottom-0 flex items-end gap-4 px-4">
                                    {/* <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div> */}
                                    <img src={imagepath + movie?.poster_path} className='w-[160px] aspect-[4/5]' alt="" />
                                    <div className="flex flex-col gap-1">
                                        <h1 className='text-4xl text-white'>{movie?.title}</h1>
                                        <h2 className='w-[600px] text-xl line-clamp-5 text-zinc-400'>{movie?.overview}</h2>
                                        <div className="flex gap-1 text-zinc-400 text-xl items-center">
                                            <FiThumbsUp />
                                            <h3 className='text-lg'>{movie?.vote_count}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )

                    )
                }

            </div>
        </>
    )
}

export default HomeCarousel