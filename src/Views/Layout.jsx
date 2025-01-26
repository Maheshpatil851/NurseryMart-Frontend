import { Outlet, } from "react-router-dom";
import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux';
import Loading from '../Components/Loading';

function Layout() {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <div>
    {isLoading ? (
      <Loading /> 
    ) : (
      <>
        <Navbar />  
        <Outlet />  
      </>
    )}
  </div>
  )
}

export default Layout


