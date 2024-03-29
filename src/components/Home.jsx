import React from 'react'
import CategoryItems from './CategoryItems'

function Home() {
  return (
    <>
    {/* Featured banner */}
    {/* CategoryItems x3-4 */}
    <CategoryItems category={"upcoming"} />
    <CategoryItems category={"popular"} />
    <CategoryItems category={"top_rated"} />
    <CategoryItems category={"trending"} />
    </>
  )
}

export default Home