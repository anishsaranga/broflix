import React, { useState } from 'react'
import { FaImdb } from "react-icons/fa";


function Card({title, vote_average, backdrop_path}) {

    const [showText, setShowText] = useState(false);

  return (
    <>
        {/* <img src={backdrop_path} alt="" 
        className='p-1 m-1'/> */}
        <div className='relative' onMouseOver={() => setShowText(true)} onMouseOut={() => setShowText(false)} >
            <img src={backdrop_path} alt="" 
            className='p-1 m-1 max-w-fit hover:opacity-65 duration-100' />
            {
                showText && 
                (
                    <span className='text-white absolute align-middle p-5 m-auto bottom-5 text-2xl font-medium font-sans flex md:w-full justify-between '>
                        {title}
                        <span className='flex justify-between items-center'>
                        <FaImdb color='gold' size={25}/> 
                        <span className='ml-2'>
                            {vote_average.toFixed(1)}
                        </span>
                        </span>
                    </span>
                )
            }
        </div>
    </>
  )
}

export default Card