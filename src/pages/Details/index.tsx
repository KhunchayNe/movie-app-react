import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { baseApi } from "../../api/axiosInstance"
import { imagepath, MovieDetails } from "../../utils/constants"
import Trailers from "../../components/MovieDetails/Trailers"
import SimularMovie from "../../components/MovieDetails/SimularMovie"

function Details() {
  const { id } = useParams<{ id: string }>()
  // console.log('Details -> id', id)
  const [details, setDetails] = useState<MovieDetails>()

  const fetchDetails = async () => {
    try {
      const resp = await baseApi.get(`/movie/${id}?language=en-US`)
      setDetails(resp.data);
      // console.log('fetchDetails -> resp', resp)
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
            <img src={imagepath + details?.poster_path} alt="backgroud" 
            className='opacity-40 w-full min-h-[500px]  aspect-[4/3] object-center' />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] mx-auto lg:mt-[500px] md:mt-[400px] sm:mt-[300px] mt-[200px]">
              <div className="md:flex gap-8">
                <img src={imagepath + details?.poster_path}
                  className="lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit" alt="" />
                <div className="">
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">{details?.original_title}
                    <span className="mx-3 lg:text-4xl md:text-3xl ms:text-2xl text-xl">({details?.release_date.substring(0, 4)})</span>
                  </h1>
                  <div className="lg:text-xl md:text-lg ms:text-md text-slate-300 mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="mt-3">{details?.overview}</h2>
                    <div className="flex flex-col md:gap-3 gap-2 mt-2 text-zinc-300">
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
              <Trailers id={details?.id}/>
              <SimularMovie id={details?.id}/>

            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Details