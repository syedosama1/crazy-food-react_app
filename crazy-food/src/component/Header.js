import React from "react";
import { CDN_LOGO } from "../utiles/constants";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate("/about")
  }
  return (
    <div className="flex justify-between items-center  shadow-lg z-10 w-full bg-slate-50 ">
      <div className="flex items-center">
        <img className="h-28 p-2" src={CDN_LOGO} alt="logo" />
      </div>
      <div className="">
        <ul className="flex list-none pr-14 font-semibold text-gray-700 text-lg">
          <li className="mr-4 ">Home</li>
          <Link to="/about">
          <li className="mr-5">About</li>
          </Link>
          <li className="  mr-6">Cart</li>
          <li>Sign In</li>
        </ul>
        <button onClick={handleNavigate}>about</button>
      </div>
    </div>
  );
};

export default Header;
