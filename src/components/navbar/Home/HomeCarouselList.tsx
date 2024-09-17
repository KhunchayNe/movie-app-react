
import { CarouselMovie } from "../../../utils/constants"
import CarouselMiniCardSkeleton from "../../Skeleton/CarouselMiniCardSkeleton"
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
                <div className="row">
                    {
                        next.length > 0 ?
                        next.map((item, index) => (
                            <CarouselMiniCard carouselMovies={carouselMovies} item={item} index={index} key={index}/>


                        ))
                        :
                        [...Array(3)].map((_,index) =>
                            <CarouselMiniCardSkeleton key={index}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomeCarouselList