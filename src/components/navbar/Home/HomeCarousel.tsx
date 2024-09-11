import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

function HomeCarousel() {
    return (
        <div className='relative'>

            <div className='relative w-[900px]'>
                <div className='block w-[900px] bg-red-300 aspect-[7/4]'></div>
                <div className='absolute bottom-0 h-44 w-full _carouselGradient'></div>
            </div>
            <div className="absolute bottom-0 flex items-end gap-4 px-4">
                <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div>
                <div className="flex flex-col gap-1">
                    <h1 className='text-4xl text-white'>Abra-ca-debra</h1>
                    <h2 className='w-[600px] text-xl line-clamp-5 text-zinc-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                    <div className="flex gap-1 text-zinc-400 text-xl items-center">
                        <FiThumbsUp />
                        <h3 className='text-lg'>457</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel