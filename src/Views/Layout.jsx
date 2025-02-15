import { Outlet, } from "react-router-dom";
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import AlertModal from "../Components/AlertModal";
import CartStatus from "../Components/CartStatus";

function Layout() {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <div className="relative bg-white dark:bg-gray-900 text-white min-h-screen  pt-16">
    <div className={`transition-all ${isLoading ? 'blur-sm pointer-events-none' : ''}`}>
      <AlertModal />
      <CartStatus /> 
      <Navbar />
      <div  className="min-h-screen"><Outlet /></div>
      <Footer />
    </div>
  
    {isLoading && (
     <Loading/>
    )}
  </div>
  
  )
}

export default Layout


