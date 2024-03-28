import React, { useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {

    const searchTerm = useRef('')


  return (
    <>
    <div className='bg-transparent shadow-lg sticky top-1 flex flex-nowrap justify-items-center m-2'>
        {/* Logo */}
        <img src="/BROFLIX.png" 
        className='h-12 p-1 mx-2 my-2 hover:cursor-pointer' 
        alt='<Broflix Logo here>'/>
        {/* Movies and TV shows buttons */}
        <button className='text-white hover:text-red-600 ml-5 mr-3'>Movies</button>
        <button className='text-white hover:text-red-600 m-3'>TV shows</button>
        
        {/* Search bar + dark/light mode toggle */}
        <span className='ml-auto mr-8 flex flex-row items-center'>
            <input type="text" 
            ref={searchTerm}
            className='bg-gray-500 rounded-xl focus:outline-red-700 focus:border-red-700 h-9 w-auto text-stone-50 p-3 m-3'/>
            <IoSearchOutline button="true" size={32} color='white' className='hover:cursor-pointer'/>
        </span>
    </div>
    </>
  )
}

export default Navbar