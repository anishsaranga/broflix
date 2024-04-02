import React from 'react'
import CategoryItems from './CategoryItems'

function Home() {
  return (
    <>
    {/* Featured banner */}
    {/* CategoryItems x3-4 */}
    {/* <CategoryItems category={"upcoming"} /> */}
    <div className="hidden md:block text-center my-10 mx-auto p-4">
      <div className='font-extralight text-2xl text-stone-200 mb-4'>Watch</div>
      <div className='font-bold text-4xl text-white'>Unlimited Movies and TV</div>
      <div className='w-full h-9 p-15 mt-auto border-b-4 border-red-600 opacity-45 rounded-full'></div>
    </div>
    <div className="md:hidden text-white text-center my-8 mx-auto p-2">
      <div className='font-extralight text-xl text-stone-200 mb-3'>Watch</div>
      <div className='font-bold text-3xl text-white'>Unlimited Movies and TV</div>
      <div className='w-full h-1 p-10 mt-auto border-b-4 border-red-600 opacity-45 rounded-full'></div>
    </div>
    <CategoryItems category={"popular"} />
    <CategoryItems category={"trending"} />
    <CategoryItems category={"top_rated"} />
    <CategoryItems category={"popular_tv"} />
    <CategoryItems category={"trending_tv"} />
    <CategoryItems category={"top_rated_tv"} />
    <div className="hidden md:block"></div>
    </>
  )
}

export default Home