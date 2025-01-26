import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {  logout } from '../Features/AuthSlice'; 
import Loading from "./Loading";
function Navbar() {
  var navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn,status, error, } = useSelector((state) => state.auth);

const handleLogout = async (e) => {
  e.preventDefault();
   await dispatch(logout());
   navigate("/login");
}
if(status == "loading")return<Loading/>

  return (
    <div>
      <div className="flex flex-row justify-between p-4 bg-gray-200">
        <h1>Navbar</h1>
        <ul className="flex flex-row space-x-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <Link to={"/login"}>Login</Link>}
          <Link to={"/register"}>Register</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
