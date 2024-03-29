import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        {/* Common navbar */}
        <Navbar />
        {/* Change outlet based on route */}
        <Outlet />
    </>
  )
}

export default Layout