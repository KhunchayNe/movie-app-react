import React from 'react'

function HomeCarousel() {
    return (
        <div>

            <div className='relative w-[900px]'>
                <div className='block w-[900px] bg-red-300 aspect-[7/4]'></div>
                <div className='absolute bottom-0 h-44 w-full _carouselGradient'></div>
            </div>
        </div>
    )
}

export default HomeCarousel