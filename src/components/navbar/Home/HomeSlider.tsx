
import React, { useEffect } from 'react'
import { CarouselMovie } from '../../../utils/constants'
import { baseApi } from '../../../api/axiosInstance'
import HomeCarousel from './Homecarousel'
import HomeCarouselList from './HomeCarouselList'
function HomeSlider() {

    const [carouselMovies, setCarouselMovies] = React.useState<CarouselMovie[]>([])
    const [next, setNext] = React.useState<number[]>([1,2,3])

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
        // <div className='relative  w-[900px]'>



            <div className="row">
                <div className="relative col-8">
                    <div id="carouselExample" className="carousel slide">
                        <HomeCarousel carouselMovies={carouselMovies} />
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
                <div className="col-4">
                    <HomeCarouselList next={next} carouselMovies={carouselMovies}/>
                </div>
            </div>
    )
}

export default HomeSlider