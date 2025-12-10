export default function CategoryTempCard({icon, name, amount}) {
  return (
    <div className="h-20 max-h-full  flex gap-2 p-2 bg-white shadow-md shadow-slate-300 border border-gray-100 rounded-xl">
      <div className="h-full w-[30%] rounded-2xl overflow-hidden">
        <img
          src={icon}
          alt="category"
          className="h-full w-full object-cover"
        />
      </div>  
      <div className="h-full w-[70%] flex flex-col  pl-2">
        <span className="text-xs font-sans font-medium text-slate-500">
          {name}
        </span>
        <h3 className="flex flex-col font-bold text-md text-gray-700 ">
          <span>Rs.</span>
          <span>{amount}</span>
        </h3>
      </div>
    </div>
  );
}
