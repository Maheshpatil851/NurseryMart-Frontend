import { Outlet, } from "react-router-dom";
import React from 'react'
import Navbar from '../Components/Navbar'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout


