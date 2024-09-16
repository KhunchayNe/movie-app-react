import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { baseApi } from "../../api/axiosInstance"
import { imagepath, MovieDetails } from "../../utils/constants"
import Trailers from "../../components/MovieDetails/Trailers"

function Details() {
  const { id } = useParams<{ id: string }>()
  console.log('Details -> id', id)
  const [details, setDetails] = useState<MovieDetails>()

  const fetchDetails = async () => {
    try {
      const resp = await baseApi.get(`/movie/${id}?language=en-US`)
      setDetails(resp.data);
      console.log('fetchDetails -> resp', resp)
    } catch (error) {
      console.log('fetchDetails -> error', error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [id])

  return (
    <div>
      {details &&
        <div className="relative h-fit w-full">
          <div className="relative">
            <img src={imagepath + details?.poster_path} alt="backgroud" className='opacity-40 w-full aspect-[4/3] object-center' />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] mx-auto mt-[500px]">
              <div className="flex gap-8">
                <img src={imagepath + details?.poster_path}
                  className="w-[350px] h-fit" alt="" />
                <div className="">
                  <h1 className="text-5xl">{details?.original_title}
                    <span className="mx-3 text-4xl">({details?.release_date.substring(0, 4)})</span>
                  </h1>
                  <div className="text-xl text-slate-300 mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="mt-3">{details?.overview}</h2>
                    <div className="flex flex-col gap-3 mt-2 text-zinc-300">
                      <h2 className="">
                        {details?.genres.map((genre) => genre.name).join(', ')}
                      </h2>
                      <h2>Rating : {String(details?.vote_average).substring(0, 3)}</h2>
                      <h2>Original Language : {details?.original_language}</h2>
                      <h2>Release Date : {details?.release_date}</h2>
                    </div>
                    {/* {
                      details?.genres.map((genre, index) => (
                        <span key={index} className="mx-1">{genre.name}</span>
                      ))
                    } */}
                  </div>

                </div>
              </div>
              <Trailers id={details?.id} key={details.id}/>

            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Details