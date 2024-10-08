import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react"
import { Link } from "react-router-dom"
import { baseApi } from "../../api/axiosInstance"
import { CarouselMovie } from "../../utils/constants"
import CarouselMiniCard from "./Home/CarouselMiniCard"
import { IoClose } from "react-icons/io5"

function Navbar() {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState<CarouselMovie[]>([])
    const [showSearch, setShowSearch] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const fetchSearch = async () => {
        try {
            const resp = await baseApi.get(`/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
            // console.log('fetchSearch -> resp', resp.data.results.map((data: { title: string }) => data.title))
            setSearchResult(resp.data.results)

        } catch (error) {
            console.log('fetchSearch -> error', error)
        }
    }
    const toggleShow = () => {
        setShowSearch(!showSearch)
    }
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            (e?.target as HTMLInputElement).blur()  // remove focus from input
            fetchSearch()
        }
    }

    useEffect(() => {
        if (search.length > 0) setShowSearch(true)
        else setShowSearch(false)
        fetchSearch()
    }, [search])

    return (
        <nav className="bg-[#121212] py-2">
            <div className="flex justify-between items-center  lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
                <div className="flex item-center lg:space-x-16 sm:space-x-8 space-x-1">
                    <Link to='/'>
                        <div className="flex flex-col text-yellow-500 sm:scale-100 scale-[70%]">
                            <h1 className="text-[18px] leading-4">AllABOUT</h1>
                            <h1 className="text-[24px] leading-4">MOVIES</h1>
                        </div>
                    </Link>
                    <Link to="/movies">
                        <button className="text-[18px] text-yellow-500 hover:underline">EXPLORE</button>
                    </Link>
                </div>

                <div className="relative">
                    <input
                        placeholder="search"
                        className="md:w-[500px] sm:w-[350px] w-[180px]  h-10 bg-black text-[#c2c2c2]
                         md:text-lg sm:text-md text-sm outline-none sm:px-4 px-3 placeholder:text-[#646464] rounded-xl"
                        onChange={handleChange}
                        onClick={() => setShowSearch(true)}
                        onKeyDown={handleKeyPress}
                        type="text" />
                    {
                        showSearch && searchResult.length > 0 &&
                        <div className="absolute top-1 right-1 text-yellow-500 sm:text-2xl text-xl z-30">
                            <IoClose onClick={toggleShow} />
                        </div>

                    }
                    {showSearch && <div className="relative" onClick={toggleShow}>

                        <div className="sm:absolute fixed z-50 left-0 sm:max-w-[500px] w-full bg-zinc-800 rounded-xl">
                            <div className="py-3 pl-5">
                                <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
                                    {searchResult.length > 0 && searchResult.map((_, index) =>
                                        <CarouselMiniCard carouselMovies={searchResult} index={index} item={index} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>

        </nav>
    )
}

export default Navbar
