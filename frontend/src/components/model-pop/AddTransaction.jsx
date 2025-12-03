import { ChevronLeft, IndianRupee } from "lucide-react";
import { useState } from "react";

export default function AddTransaction() {
    const [amount,setAmount]= useState(0);
  return (
    <div className="h-screen w-1/4 bg-white fixed top-0 right-0 p-5">
      <div className="h-[10%]">
        <span className="flex items-center gap-3 font-lato font-normal text-gray-400 hover:text-gray-600 cursor-pointer text-lg">
          <ChevronLeft /> Back
        </span>
      </div>
      <div className="h-[90%] flex flex-col justify-between">
        <div className="flex gap-4 items-center justify-between">
          <button className="w-1/2 py-2 px-4 text-lg bg-blue-500 text-white rounded-xl">
            Expense
          </button>
          <button className="w-1/2 py-2 px-4 text-lg bg-gray-100 rounded-xl">
            Income
          </button>
        </div>

        <div className="w-30 flex items-center justify-center">
            <label htmlFor="amount"  ><IndianRupee className="size-14 text-blue-400"/></label>
            <input 
                id="amount" 
                type="text" 
                value={amount} 
                className="w-10 focus:w-1/2 transition ease-in text-blue-300 text-5xl bg-transparent focus:outline-none"  
                onChange={(e)=>setAmount( e.target.value)}
            />
        </div>

        <div className="w-full bg-blue-500 py-2 text-center text-white text-xl font-bold rounded-xl">
            <button>
                Next
            </button>
        </div>
      </div>
    </div>
  );
}
