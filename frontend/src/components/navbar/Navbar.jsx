import React from "react";
import {Link, NavLink} from "react-router-dom"
import icons from "../../assets/icons/index";
import {
  ChartColumn,
  Grid3x3,
  LayoutDashboard,
  LogOut,
  Plus,
  UserRound,
  Wallet,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-auto w-20 bg-white">
      <div className="h-full w-full flex flex-col items-center justify-between  py-5 border-r">
        {/* Logo */}
        <div className="h-14 w-14  flex justify-center items-center rounded-xl shadow-sm  bg-blue-500">
          <img src={icons.logo} alt="logo" className="size-10" />
        </div>
        {/* NavLinks */}
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <NavLink 
            to=""
            className={({isActive})=>` h-12 w-12 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <LayoutDashboard />
          </NavLink>
          <NavLink 
            to="category"
            className={({isActive})=>` h-12 w-12 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <Grid3x3 />
          </NavLink>
          <NavLink 
            to='transaction'
            className={({isActive})=>` h-12 w-12 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <Wallet />
          </NavLink>
          <NavLink 
            to='analytics'
            className={({isActive})=>` h-12 w-12 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <ChartColumn />
          </NavLink>
          <NavLink 
            to='profile'
            className={({isActive})=>` h-12 w-12 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <UserRound />
          </NavLink>
        </div>
        {/* Add Transaction & LogOut */}
        <div className="flex flex-col gap-3 items-center">
          <span className="h-12 w-12 flex justify-center items-center rounded-xl shadow-sm  bg-blue-500 text-white">
            <Plus className="size-6 "/>
          </span>
          <Link
            to='signup'
           className="h-12 w-12 text-gray-400 hover:bg-red-100 hover:text-red-500 rounded-lg flex items-center justify-center">
            <LogOut /> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
