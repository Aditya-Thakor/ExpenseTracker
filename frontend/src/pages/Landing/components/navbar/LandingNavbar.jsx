import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
export default function LanNavbar() {
  const navigate = useNavigate();

  return (
    <div className="h-20 w-full z-50 px-10 flex justify-between items-center fixed top-0 bg-white text-gray-600 text-sm">
      {/* logo */}
      <div>
        <h1 
          className="text-2xl font-medium cursor-pointer"
          onClick={()=>navigate("/landing")}
        >
          ExpenseTracker
        </h1>
      </div>

      {/* Links */}
      <div className="flex gap-9 ">
        <a href='#features'>Features</a>
        <a href="#working">How it Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#review">Review</a>
      </div>

      {/* Sign in and Sign up */}
      <div className="flex items-center gap-5  ">
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
    </div>
  );
}
