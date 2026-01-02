import React, {  useState } from "react";
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
import AddTransactionModal from "../addTransactions/modelDemoz/D1";

const Navbar = () => {
  const [showmodal,setShowmodal]= useState(false)
  

  return (
    <div className="h-20 w-full fixed bottom-0 lg:static  lg:h-auto lg:w-20  bg-white  ">
      <div className="h-full w-full  flex lg:flex-col items-center justify-center lg:justify-between  py-5 px-7 lg:px-0 lg:border-r ">
        {/* Logo */}
        <div className="h-14 w-14 fixed hidden lg:flex justify-center items-center rounded-xl shadow-sm  bg-blue-500">
          <img src={icons.logo} alt="logo" className="size-10" />
        </div>
        {/* NavLinks */}
        <div className="h-full w-full lg:fixed lg:top-40">
            <div className="flex lg:flex-col items-center justify-between gap-3 text-slate-300">
          <NavLink 
            to=""
            className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <LayoutDashboard />
          </NavLink>
          <NavLink 
            to="category"
            className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <Grid3x3 />
          </NavLink>
          <NavLink 
            to='transaction'
            className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <Wallet />
          </NavLink>
          <NavLink 
            to='analytics'
            className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <ChartColumn />
          </NavLink>
          <NavLink 
            to='profile'
            className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
           ${isActive? 
           "bg-[#3B82F6] text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)]": 
           "bg-transparent  hover:bg-gray-100 hover:text-gray-600"} 
           `}>
            <UserRound />
          </NavLink>
        </div>
        </div>
        

        {/* Add Transaction & LogOut */}
        <div className="hidden lg:flex flex-col gap-3 items-center fixed bottom-0">
          <span 
            className="h-12 w-12 flex justify-center items-center rounded-xl shadow-sm  bg-blue-500 text-white"
            onClick={()=>setShowmodal(true)}
          >
            <Plus className="size-6 "/>
          </span>
          <Link
            to='signin'
           className="h-12 w-12 text-gray-400 hover:bg-red-100 hover:text-red-500 rounded-lg flex items-center justify-center">
            <LogOut /> 
          </Link>
        </div>
      </div>
            <Plusbtn/>
      {/* add transaction modal */}
            <AddTransactionModal
              open={showmodal}
              onClose ={()=>setShowmodal(false)}
            />
    </div>
  );
};

const Plusbtn = ()=>{
  return(
    <div className="size-12 absolute -top-14 right-7 lg:hidden">
      <span 
            className="h-full w-full flex justify-center items-center rounded-xl shadow-sm  bg-blue-500 text-white"
            onClick={()=>setShowmodal(true)}
          >
            <Plus className="size-6 "/>
          </span>
    </div>
  )
}

export default Navbar;
