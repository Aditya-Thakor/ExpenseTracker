export default function TransactionCard({type,icon, tag, date, amount}) {
  return (
    <div 
        className={`h-1/5 w-full flex justify-between items-center px-5 rounded-xl 
        ${type==="income" ? 
            "bg-emerald-100" :
            "bg-rose-100" 
        }
        `}
    >
      <div className="flex items-center gap-4">
        <div>
          <img src={icon} alt="category" />
        </div>
        <div>
          <h3 className="text-slate-900 font-sans font-semibold text-lg ">
            {tag}
          </h3>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
      </div>
      <div>
        <h2 
            className={`text-xl ${type==="income" ? "text-green-600" : "text-red-600"}  `}>Rs. {amount}</h2>
      </div>
    </div>
  );
}
