export default function TransactionCard({type,icon, tag, date, amount, category="Other"}) {
  return (
    <div 
        className={`h-auto max-h-20 w-full flex justify-between items-center px-5 py-3 rounded-xl 
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
        <div className="flex flex-col gap-3">
          <h3 className="text-slate-900 font-sans font-semibold text-lg ">
            {tag}
          </h3>
          <p className="flex gap-2 items-center ">
            <span className="text-md text-slate-700">{category}</span>
            <span className="text-xs text-slate-500">{date}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 
            className={`text-xl ${type==="income" ? "text-green-600" : "text-red-600"}  `}>Rs. {amount}</h2>
      </div>
    </div>
  );
}
