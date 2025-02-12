import React, { useState } from "react";
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
      {/* Navbar Container */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md pt-5 pb-5 mb-10 fixed top-0 left-0 right-0 z-50 h-21">
        {/* Logo */}
        <h1 className="text-3xl font-bold hover:text-amber-300">
          <Link to={"/"}>NurseryMart</Link>
        </h1>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6 text-3xl">
  <li>
    <Link
      to={"/home"}
      className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:scale-105 hover:shadow-xl"
    >
      Home
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
    </Link>
  </li>
  
  <li>
    <Link
      to={"/product"}
      className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-500 hover:scale-105 hover:shadow-xl"
    >
      Product
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
    </Link>
  </li>
  <li>
    <Link
      to={"/about"}
      className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 hover:scale-105 hover:shadow-xl"
    >
      About
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
    </Link>
  </li>
  <li>
    <Link
      to={"/contact"}
      className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-600 hover:scale-105 hover:shadow-xl"
    >
      Contact
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-600 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
    </Link>
  </li>
  {isLoggedIn ? (
    <li>
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
      <li>
        <Link
          to={"/login"}
          className="relative p-2 rounded-lg transition-all duration-300 ease-in-out transform text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-500 hover:scale-105 hover:shadow-xl"
        >
          Login
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
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
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gradient-to-r from-green-400 to-blue-500 p-4 space-y-4 absolute top-16 left-0 right-0 z-40`}
      >
        <ul>
          <li>
            <Link to={"/"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">About</Link>
          </li>
          <li>
            <Link to={"/product"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Product</Link>
          </li>
          <li>
            <Link to={"/contact"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Contact</Link>
          </li>
          {isLoggedIn ? (
            <li className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300 -mt-2.5">
              <button onClick={handleLogout} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">
                Logout
              </button>
            </li >
          ) : (
            <>
              <li>
                <Link to={"/login"} className="block hover:bg-amber-300 p-2 rounded-lg transition duration-300">Login</Link>
              </li>
              <li>
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
