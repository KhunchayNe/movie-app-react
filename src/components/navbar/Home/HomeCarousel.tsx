import axios from 'axios'
import React, { useEffect } from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { imagepath } from '../../../utils/constants'
import { baseApi } from '../../../api/axiosInstance'

function HomeCarousel() {
    interface CarouselMovie {
        backdrop_path: string
        poster_path: string
        title: string
        overview: string
        vote_count: number
    }
    const [carouselMovies, setCarouselMovies] = React.useState<CarouselMovie[]>([])

    const fetchUpcoming = async () => {
        try {
            const resp = await baseApi.get('/movie/upcoming')
            // console.log(resp.data.results)
            setCarouselMovies(resp.data.results)

        } catch (error) {
            console.log(
                'There was an error fetching the upcoming movies',
                error
            )
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, [])

    return (
        <div className='relative  w-[900px]'>



            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">

                    {
                        carouselMovies.map((movie, index) => (
                            <>
                                <div className={`carousel-item ${index ==0 ? 'active' : ''}`}>
                                    <div className='relative'>
                                        {/* <div className='block w-[900px] bg-red-300 aspect-[7/4]'></div> */}
                                        <img src={imagepath + movie?.backdrop_path} className='w-full aspect-[7/4]' alt="" />
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
                            </>
                        )

                        )
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeCarousel