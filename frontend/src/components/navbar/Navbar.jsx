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
  const [showmodal,setShowmodal]= useState(false);
  
  const navLinks=[
    {
      to:'',
      icon:<LayoutDashboard />
    },
    {
      to:'category',
      icon:<Grid3x3 />
    },
    {
      to:'transaction',
      icon:<Wallet />
    },
    {
      to:'analytics',
      icon:<ChartColumn />
    },
    {
      to:'profile',
      icon:<UserRound />
    },
  ]

  return (
    <div className="h-20 w-full z-50 lg:z-auto fixed bottom-0 xl:static  xl:h-auto xl:w-20  bg-white  ">
      <div className="h-full w-full  flex xl:flex-col items-center justify-center lg:justify-between  py-5 px-7 xl:px-0 xl:border-r xl:border-r-blue-100 ">
        {/* Logo */}
        <div className="h-14 w-14 fixed hidden xl:flex justify-center items-center rounded-xl shadow-sm  bg-gradient-to-br from-blue-500 to-cyan-500">
          <img src={icons.logo} alt="logo" className="size-9" />
        </div>
        {/* NavLinks */}
        <div className="h-full w-full xl:w-auto xl:fixed xl:top-40">
            <div className="flex xl:flex-col items-center justify-between gap-3 text-slate-400 ">
          {//bg-[#3B82F6]
            navLinks.map((n,ind)=>(
              <NavLink 
                key={ind}
                to={n.to}
                className={({isActive})=>` size-10 rounded-lg flex items-center justify-center 
                ${isActive? 
                "bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0px_6px_10px_rgba(59,130,246,0.3)] transition-all ease-in size-[2.70rem]": 
                "bg-transparent  hover:bg-blue-100/80 hover:text-gray-600"} 
                `}>
                 {n.icon}
              </NavLink>
            ))
          }
        </div>
        </div>
        

        {/* Add Transaction & LogOut */}
        <div className="hidden xl:flex flex-col gap-3 items-center fixed bottom-0">
          <span 
            className="h-12 w-12 flex justify-center items-center rounded-xl shadow-sm  bg-gradient-to-br from-blue-600 to-cyan-400 shadow-black/40 text-white active:scale-90"
            onClick={()=>setShowmodal(true)}
          >
            <Plus className="size-7 "/>
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
    <div className="size-12 absolute -top-14 right-7 xl:hidden">
      <span 
            className="h-full w-full flex justify-center items-center rounded-xl shadow-sm  bg-gradient-to-br from-blue-500 to-cyan-400 shadow-black/40 text-white active:scale-90"
            onClick={()=>setShowmodal(true)}
          >
            <Plus className="size-7 "/>
          </span>
    </div>
  )
}

export default Navbar;
