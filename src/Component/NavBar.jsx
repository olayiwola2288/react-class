import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-600 py-4 text-white flex justify-center">
      <div>
        <Link to="/SignUp" className="px-2">
          Sign up
        </Link>
        <Link to="/signIn" className="px-2">
          Sign in
        </Link>
        <Link to="/Display" className="px-2">
          Display
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
