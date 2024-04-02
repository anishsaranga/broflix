import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_KEY, { bearer_token } from '../API_KEY'
import Card from './Card'

function SearchPage() {
    // this variable name should be same as captured in route.. else won't work
    const { term } = useParams()
    // searching url

    /// Since something is wrong with the API key using Token
    const url = `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1` 
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearer_token}`
    }
    }

    // storing data based on search
    const [data, setData] = useState()

    // load search data at initial load or based on search term
    useEffect(
        () => {
            fetch(url, options)
            .then( response => response.json())
            .then( (data) => setData(data.results))
        }, [term])

    /// image url without setting the width param
    const image_url = `https://image.tmdb.org/t/p/`
    const width_300 = `w300`
    const width_400 = `w400`

  return (
    <>
    {/* for small screens */}
    <div className='md:hidden'>
        <div className='flex flex-wrap justify-center my-10 p-1'>
            {
                data && data.map( (item) => (
                    <Card 
                    key={item.id}
                    title={item.title}
                    vote_average={item.vote_average}
                    backdrop_path={image_url + width_300 + item.backdrop_path}/>
                ))
            }
        </div>

    </div>

    {/* mediums and above */}
    <div className='hidden md:block'>
    <div className='flex flex-wrap justify-center my-10 p-1'>
            {
                data && data.map( (item) => (
                    <Card 
                    key={item.id}
                    title={item.title}
                    vote_average={item.vote_average}
                    backdrop_path={image_url + width_400 + item.backdrop_path}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default SearchPage