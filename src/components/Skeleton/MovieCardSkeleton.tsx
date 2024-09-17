function MovieCardSkeleton() {
    return (

        <div className="col">
            <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden`}>
                <div className="relative">
                    <div className="aspect-[3/4] w-full placeholder"></div>
                    <div className="absolute bottom-0 w-full h-28 _carouselGradient"></div>
                </div>
                <div className="bg-[#222] p-2">
                    <h1 className={`md:text-[17px] text-sm w-[70%] placeholder`}></h1>
                    <div className="text-[15px] text-zinc-300 mt-2 ">
                        <h1 className='w-[90%] placeholder'>Rating : </h1>
                        <h1 className='w-[80%] placeholder'>Language : </h1>
                        <h1 className='w-[40%] placeholder'>Release : </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCardSkeleton