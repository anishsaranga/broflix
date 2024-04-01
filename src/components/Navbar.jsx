import React, { useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";
// routing stuff
import { Link } from 'react-router-dom';

function Navbar() {

    const searchTerm = useRef('')


  return (
    <>
    <div className='shadow-lg bg-slate-950 sticky top-0 left-0 flex flex-nowrap justify-items-center items-center z-[100] w-full h-full'>
        {/* Logo */}
        <Link to="/"><img src="/BROFLIX.png" 
        className='h-12 p-1 mx-2 my-2 bg-slate-950 hover:cursor-pointer' 
        alt='<Broflix Logo here>'/>
        </Link>
        {/* Movies and TV shows buttons */}
        <Link to="/movies" button="true" className='text-white hover:text-red-600 duration-150 ml-5 mr-3 hidden md:block'>Movies</Link>
        <Link to="/" button="true" className='text-white hover:text-red-600 duration-150 m-3 hidden md:block'>TV shows</Link>
        
        {/* Search bar + dark/light mode toggle */}
        <span className='ml-auto mr-8 flex flex-row items-center'>
            <input type="text" 
            ref={searchTerm}
            className='bg-gray-500 rounded-full focus:outline-red-700 focus:border-red-700 focus:border-4 h-10 w-auto text-stone-50 p-3 m-3'/>
            <IoSearchOutline button="true" size={32} color='white' className='hover:cursor-pointer'/>
        </span>
    </div>
    </>
  )
}

export default Navbar