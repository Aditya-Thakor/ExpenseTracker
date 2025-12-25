import { ArrowRight } from "lucide-react";

export default function LanNavbar() {
  return (
    <div className="h-20 w-full px-10 flex justify-between items-center fixed top-0 bg-white text-gray-600 text-sm">
        <div>
            <h1 className="text-xl">ExpenseTracker</h1>
        </div>
      <div className="flex gap-9 ">
        <span>Features</span>
        <span>How it Works</span>
        <span>Pricing</span>
        <span>FAQ</span>
      </div>
      <div className="flex items-center gap-5  ">
        <span className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-xl cursor-pointer" >Login</span>
        <span className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-400/50 text-white rounded-2xl px-7 py-2 hover:shadow-lg hover:shadow-blue-400/50 cursor-pointer">
          <span>Get Started</span>
          <span ><ArrowRight className="size-4"/></span>
        </span>
      </div>
    </div>
  );
}
