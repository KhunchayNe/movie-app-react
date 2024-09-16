import { ChangeEvent, useEffect, useState,KeyboardEvent } from "react"
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
            <div className="flex justify-between items-center w-[80%] mx-auto">
                <div className="flex space-x-16">
                    <Link to='/'>
                        <div className="flex flex-col text-yellow-500">
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
                        className="w-[500px] h-10 bg-black text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl"
                        onChange={handleChange}
                        onClick={()=> setShowSearch(true)}
                        onKeyDown={handleKeyPress}
                        type="text" />
                        {
                            showSearch && searchResult.length > 0 && 
                            <div className="absolute top-1 right-1 text-yellow-500 text-2xl z-30">
                                <IoClose onClick={toggleShow} />
                            </div>

                        }
                    {showSearch && <div className="relative" onClick={toggleShow}>

                        <div className="absolute z-50 left-0 w-full bg-zinc-800 rounded-xl">
                            <div className="py-3 pl-5">
                                <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
                                    {searchResult.length > 0 && searchResult.map((movie, index) =>
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
