export const imagepath = "https://image.tmdb.org/t/p/original/"

export interface CarouselMovie {
    backdrop_path: string
    poster_path: string
    title: string
    overview: string
    vote_count: number
}

export interface movieCard {
    id: number
    poster_path: string
    release_date: string
    title: string
    vote_average: number
    original_language: string
}

export interface CategoryType {
    name: string
    endpoint: string
}

// export const Category = ["Now Paying", "Popular", "Top Rated", "Upcoming"]
export const category: CategoryType[] = [
    { name: "Now Playing", endpoint: "/movie/now_playing" },
    { name: "Popular", endpoint: "/movie/popular" },
    { name: "Top Rated", endpoint: "/movie/top_rated" },
    { name: "Upcoming", endpoint: "/movie/upcoming" }
]

export interface MovieDetails {
    id: number
    poster_path: string
    backdrop_path: string
    original_title: string
    release_date: string
    tagline: string
    overview: string
    genres: {name: string }[]
    vote_average: number
    original_language: string
}