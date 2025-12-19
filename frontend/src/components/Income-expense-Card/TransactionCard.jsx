export default function TransactionCard({type,icon, tag, date, amount,bg, category="Other"}) {

  
  return (
    <div 
        className={`h-auto max-h-20 w-full flex justify-between items-center px-5 py-3 rounded-xl border shadow-sm
        
        ${bg==="whitebg"? "bg-white border-0 " : ""}
        `}
    >
      <div className="flex items-center gap-4">
        <div 
          className={` size-10 flex justify-center items-center rounded-lg
              ${type==="expense"? "bg-red-500":"bg-green-500" }
          `}
          
        >
          <img src={icon} alt="category" />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-slate-800 font-sans font-semibold text-lg ">
            {tag}
          </h3>
          <p className="flex  gap-2 items-baseline ">
            <span className="text-sm font-sans font-medium text-slate-500">{category}</span>
            <span className="text-xs text-slate-400">{date}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 
            className={`text-xl ${type==="income" ? "text-green-500" : "text-red-500"}  `}>Rs. {amount}</h2>
      </div>
    </div>
  );
}
