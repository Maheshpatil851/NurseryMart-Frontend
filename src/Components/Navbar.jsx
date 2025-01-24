import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between p-4 bg-gray-200">
        <h1>Navbar</h1>
        <ul className="flex flex-row space-x-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
