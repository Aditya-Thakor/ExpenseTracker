// import { useEffect, useState } from "react";
import i from "../../assets/icons/index";
export default function CategoryCard({name,amount,icon,transactions, bgfrom, bgto,border,shadow, pbgfrom, pbgto,pr}) {
// fetch category data and replace with props 
// track how many transactions are made in each category (get transactions, expense of total and progress)



    const colors = {
        background: `linear-gradient(to bottom right , ${bgfrom}, ${bgto})`,
        border: `1px solid ${border} `,
        boxShadow: `0px 4px 10px ${shadow}`
    }
    const pcolor ={
        background: `linear-gradient(to right , ${pbgfrom}, ${pbgto})`,
        with:`calc(100%-${pr}%) `
    }
    
  return (
    <div 
        className="h-64 w-full flex flex-col gap-5  border border-red-300 rounded-xl p-3 shadow-md"
        style={colors}
    >
      {/* category icon */}
      <div className="h-1/4 w-full">
        <img src={icon} alt="categoryIcon" className="h-full" />
      </div>

      {/* amount data */}
      <div className="h-1/4 w-full">
        <span className="text-md font-sans font-medium text-slate-500">{name}</span>
        <h3 className="h-full text-4xl text-slate-900 font-medium">
          Rs. {amount}
        </h3>
      </div>

      {/* transaction data */}
      <div className="h-12 w-full flex flex-col gap-3">
        <div className="h-1/2 w-full flex items-center gap-3 ">
          <span className="h-full">
            <img src={i.tmini} alt="transaction_icon" className="h-full" />
          </span>
          <span className="text-xs font-sans text-gray-400">
            {transactions} transaction
          </span>
        </div>
        <div className="h-1/2 flex items-center gap-2 text-sm ">
            <span className="h-full px-3 bg-white rounded-xl flex items-center gap-3">
                <img src={i.aup} alt="arrow up" className="h-1/2" />
                {Math.round(pr)}%
            </span>
            <span className="text-slate-700 font-lato">of  Total</span>
        </div>
      </div>

      {/* progress bar */}
      <div className="h-2 w-full rounded-xl bg-white relative overflow-hidden">
        <span 
            className={`h-full w-10 rounded-xl absolute `}
            style={pcolor}
        ></span>
      </div>
    </div>
   
  );
}



// CODE:
    // <div className="h-64 w-full flex flex-col gap-5  border border-red-300 rounded-xl p-3 shadow-md">
    //   {/* category icon */ }
    //   <div className="h-1/4 w-full">
    //     <img src={i.food} alt="categoryIcon" className="h-full" />
    //   </div>

    //   {/* amount data */}
    //   <div className="h-1/4 w-full">
    //     <span className="text-lg text-slate-700">Food & Dinning</span>
    //     <h3 className="h-full text-4xl text-slate-900 font-medium">
    //       Rs. 33,000
    //     </h3>
    //   </div>

    //   {/* transaction data */}
    //   <div className="h-12 w-full flex flex-col gap-3">
    //     <div className="h-1/2 w-full flex items-center gap-3 ">
    //       <span className="h-full">
    //         <img src={i.tmini} alt="transaction_icon" className="h-full" />
    //       </span>
    //       <span className="text-xs font-sans text-gray-400">
    //         28 transaction
    //       </span>
    //     </div>
    //     <div className="h-1/2 flex items-center gap-2 text-sm ">
    //         <span className="h-full px-3 bg-white rounded-xl flex items-center gap-3">
    //             <img src={i.aup} alt="arrow up" className="h-1/2" />
    //             21%
    //         </span>
    //         <span className="text-slate-700 font-lato">of  Total</span>
    //     </div>
    //   </div>

    //   {/* progress bar */}
    //   <div className="h-2 rounded-xl bg-white relative overflow-hidden">
    //     <span className="h-full w-1/4 rounded-xl absolute bg-red-300"></span>
    //   </div>
    // </div>
//*/
