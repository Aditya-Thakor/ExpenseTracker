import { ArrowRight, CircleChevronRight, Menu, X, XCircle, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LanNavbar() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const links = [
    {
      name: "Features",
      href:"#features"
    },
    {
      name: "How it Works",
      href:"#working"
    },
    {
      name: "Pricing",
      href:"#pricing"
    },
    {
      name: "Review",
      href:"#review"
    },
  ]

  return (
    <div className="h-20 w-screen border  z-50 px-5 lg:px-10 flex justify-between items-center fixed top-0 bg-white text-gray-600 text-sm">
      {/* logo */}
      <div>
        <h1
          className="text-2xl font-medium cursor-pointer"
          onClick={() => navigate("/landing")}
        >
          ExpenseTracker
        </h1>
      </div>

      {/* Links */}
      <div className="hidden lg:flex gap-9 ">
        <a href="#features">Features</a>
        <a href="#working">How it Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#review">Review</a>
      </div>

      {/* Sign in and Sign up */}
      <div className="hidden lg:flex items-center gap-5  ">
        <span
          className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-xl cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Login
        </span>
        <span
          className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-400/50 text-white rounded-2xl px-7 py-2 hover:shadow-lg hover:shadow-blue-400/50 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          <span>Get Started</span>
          <span>
            <ArrowRight className="size-4" />
          </span>
        </span>
      </div>

      <div className="lg:hidden relative">
        <span>
          <Menu
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </span>
      </div>
      {menu ? (
        <div className="h-80 w-screen absolute right-0 top-0 px-5 bg-white/90">
          <div className="h-20 w-full bg-white flex items-center justify-end">
            <X
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          <div className="h-auto w-full flex flex-col gap-3 text-2xl py-5 ">
           {
            links.map((ln,ind)=>(
                <a 
                  href={ln.href}
                  className="flex justify-between items-center"
                  onClick={()=>setMenu(!menu)}
                >
                  <span>{ln.name}</span>
                  <span><CircleChevronRight /></span>
                </a>
            ))
           }
           
          
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
