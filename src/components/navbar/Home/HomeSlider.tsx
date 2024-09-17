
import { useEffect, useState } from 'react'
import { CarouselMovie } from '../../../utils/constants'
import { baseApi } from '../../../api/axiosInstance'
import HomeCarouselList from './HomeCarouselList'
import HomeCarousel from './HomeCarousel'
import HomeCarouselSkeleton from '../../Skeleton/HomeCarouselSkeleton'
function HomeSlider() {

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([])
    const [selected, setSelected] = useState<number>(0)
    const [next, setNext] = useState<number[]>([])


    useEffect(() => {
        if (carouselMovies.length > 0) {
            // console.log(carouselMovies.length)
            const ind1 = (selected + 1) % carouselMovies.length
            const ind2 = (selected + 2) % carouselMovies.length
            const ind3 = (selected + 3) % carouselMovies.length
            setNext([ind1, ind2, ind3])

        }
    }, [carouselMovies, selected])

    useEffect(() => {
        const myCarousel = document.getElementById('carouselExample')

        const handleSlide = (e: any) => {
            console.log(e.from, "---", e.to)
            setSelected(e.to)
        }

        if (myCarousel) {
            myCarousel.addEventListener('slide.bs.carousel', handleSlide)

            return () => {
                myCarousel.removeEventListener('slide.bs.carousel', handleSlide)
            }
        }

    }, [])



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
        <div className="row">

            <div className="relative col-xl-8">
                {
                    carouselMovies.length > 0 ?
                        <div id="carouselExample" className="carousel slide h-full">
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
                        : <HomeCarouselSkeleton />
                }
            </div>
            <div className="col-xl-4 lg:block hidden">
                <HomeCarouselList next={next} carouselMovies={carouselMovies} />
            </div>
        </div>
    )
}

export default HomeSlider