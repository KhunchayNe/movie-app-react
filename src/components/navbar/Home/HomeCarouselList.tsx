
import { CarouselMovie } from "../../../utils/constants"
import CarouselMiniCard from "./CarouselMiniCard"

interface HomeCarouselListProps {
    next: number[]
    carouselMovies: CarouselMovie[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {

    // console.log(next)
    return (
        <>
            <div>
                <h1 className='font-bold text-xl text-yellow-500'>Up Next</h1>
                {
                    next.map((item, index) => (
                       <CarouselMiniCard carouselMovies={carouselMovies} item={item} index={index}/>


                    ))
                }
            </div>
        </>
    )
}

export default HomeCarouselList