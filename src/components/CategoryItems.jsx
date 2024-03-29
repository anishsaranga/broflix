import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import API_KEY from '../API_KEY'

function CategoryItems({category}) {

    const image_url = `https://image.tmdb.org/t/p/w400`

    const request_urls = {
        popular: `https://api.themoviedb.org/3/movie/popular` + `?api_key=${API_KEY}`,
        top_rated: `https://api.themoviedb.org/3/movie/top_rated` + `?api_key=${API_KEY}`,
        upcoming: `https://api.themoviedb.org/3/movie/upcoming` + `?api_key=${API_KEY}`,
        trending: `https://api.themoviedb.org/3/trending/movie/day` + `?api_key=${API_KEY}`
    }

    // to store response
    const [movies, setMovies] = useState([]);
    // load at component render once
    useEffect(() => {
        fetch(request_urls[category])
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
    }, [])

        //{ console.log(`${category}`, movies);}

    // category headings
    const category_headings = {
        popular: "Popular",
        top_rated: "Top Rated",
        upcoming: "Upcoming",
        trending: "Trending"
    }

  return (
    <>
    <h1 className='text-white font-semibold text-3xl shadow-md text-left mx-10 mt-7 mb-3 scrollbar-hide'>{category_headings[category]}</h1>
    <div className='flex flex-row flex-nowrap overflow-scroll scrollbar-hide px-4 mb-16'>
        {/* Add left button */}
        {/* movie cards */}
        {
            movies.map((movie) => (
                <MovieCard backdrop_path={image_url+movie.backdrop_path} key={movie.id}
                    title={movie.title} vote_average={movie.vote_average}/>
                
            ))
        }
        {/* Add right button */}
    </div>
    </>
  )
}

export default CategoryItems