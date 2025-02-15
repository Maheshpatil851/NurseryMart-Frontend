import React, { useState } from "react";
import { FaHome, FaPhoneAlt,FaUser, FaClipboardList , FaSignInAlt, FaSignOutAlt, FaRegUserCircle, FaShoppingCart } from "react-icons/fa"; // Added shopping cart icon
import { GiFarmer } from "react-icons/gi"; // Farmer icon
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {  logout } from '../Features/AuthSlice'; 
function Navbar() {
  var navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn,status } = useSelector((state) => state.auth);

const handleLogout = async (e) => {
  e.preventDefault();
   await dispatch(logout());
   navigate("/login");
}

  return (
    <div className="relative">
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md pt-5 pb-5 mb-10 fixed top-0 left-0 right-0 z-50 h-17">
      <h1 className="text-3xl font-bold flex items-center space-x-2 hover:text-amber-300 text-gradient">
        <GiFarmer size={30} />
        <Link to={"/"} className="text-white hover:text-white">NurseryMart</Link>
      </h1>
  
      <button
        className="lg:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
  
      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-2 text-2xl items-center">
        <li className="flex items-center">
          <FaHome className=" text-white" />
          <Link
            to={"/home"}
            className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:scale-105 hover:shadow-xl"
          >
            Home
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
  
        <li className="flex items-center">
          <FaShoppingCart className=" text-white" />
          <Link
            to={"/product"}  
            className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-500 hover:scale-105 hover:shadow-xl"
          >
            Shop  
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
  
        <li className="flex items-center">
          <FaClipboardList className=" text-white" />
          <Link
            to={"/orders"}
            className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 hover:scale-105 hover:shadow-xl"
          >
            Orders
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
  
        {/* <li className="flex items-center">
          <FaUser className=" text-white" />
          <Link
            to={"/contact"}
            className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-600 hover:scale-105 hover:shadow-xl"
          >
            Contact
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-600 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li> */}
  
        {isLoggedIn ? (
          <li className="flex items-center">
            <FaSignOutAlt className=" text-white" />
            <button
              onClick={handleLogout}
              className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:scale-105 hover:shadow-xl"
            >
              Logout
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
            </button>
          </li>
        ) : (
          <>
            <li className="flex items-center">
              <FaSignInAlt className=" text-white" />
              <Link
                to={"/login"}
                className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-500 hover:scale-105 hover:shadow-xl"
              >
                Login
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="flex items-center">
              <FaRegUserCircle className=" text-white" />
              <Link
                to={"/register"}
                className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 hover:scale-105 hover:shadow-xl"
              >
                Register
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  
    {/* Mobile Navigation (Hamburger Menu) */}
    <div
  className={`lg:hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} 
    bg-gradient-to-r from-green-400 to-blue-500 p-4 space-y-4 absolute left-0 right-0 z-40 transition-all duration-500 ease-in-out overflow-hidden`}
>
  <ul>
    <li className="flex items-center">
      <FaHome className="mr-1 text-amber-300" />
      <Link to={"/"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Home</Link>
    </li>
    <li className="flex items-center">
      <FaShoppingCart className="mr-1 text-amber-300" />
      <Link to={"/product"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Shop</Link>
    </li>
    <li className="flex items-center">
      <FaPhoneAlt className="mr-1 text-amber-300" />
      <Link to={"/contact"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Contact</Link>
    </li>
    {isLoggedIn ? (
      <li className="flex items-center">
        <FaSignOutAlt className="mr-1 text-amber-300" />
        <button onClick={handleLogout} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">
          Logout
        </button>
      </li>
    ) : (
      <>
        <li className="flex items-center">
          <FaSignInAlt className="mr-1 text-amber-300" />
          <Link to={"/login"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Login</Link>
        </li>
        <li className="flex items-center">
          <FaRegUserCircle className="mr-1 text-amber-300" />
          <Link to={"/register"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Register</Link>
        </li>
      </>
    )}
  </ul>
</div>

  </div>
  );
}

export default Navbar;
