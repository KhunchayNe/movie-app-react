import { useEffect, useState } from 'react'
import { baseApi } from '../../api/axiosInstance'
import YouTube from 'react-youtube';

interface TrailersProps {
    id: number
}

function Trailers({ id }: TrailersProps) {

    const [trailers, setTrailers] = useState<[]>([])

    const featchTrailers = async () => {
        try {
            const resp = await baseApi.get(`/movie/${id}/videos?language=en-US`)
            const trailers = resp.data.results.filter((data: { type: string }) => data.type === 'Trailer')
            // console.log('fetchDetails -> trailers', trailers)

            setTrailers(trailers);

        } catch (error) {
            console.log('fetchDetails -> error', error)
        }
    }
    useEffect(() => {
        featchTrailers()
    }, [trailers])

    const opts = {
        height: '280',
        width: '380',
    }

    return (
        <div className="">
            {Trailers.length > 0 &&
                <div className='md:mt-16 mt-4'>
                    <h1 className='md:text-3xl ms:text-2xl text-xl text-yellow-500 font-bold'>Watch Trilers</h1>
                    <div className="flex flex-wrap gap-4">
                        {
                            trailers.length > 0 && trailers?.map((trailer: { key: string, name: string }, index: number) => (

                                <div className="flex flex-col sm:gap-2 mt-4 " key={index}>
                                    <YouTube videoId={trailer.key} className='' opts={opts} />
                                    <h1 className='text-xl w-[380px]'>{trailer.name}</h1>
                                </div>

                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Trailers