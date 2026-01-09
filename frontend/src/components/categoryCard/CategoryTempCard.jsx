// import i from "../../assets/icons/index";
export default function CategoryTempCard({icon, name, amount}) {
  return (
    <div className="h-16 lg:h-20 max-h-full w-full flex gap-4 sm:gap-2 p-2 bg-white shadow-md shadow-slate-300 border border-gray-100 rounded-xl relative">
      <div className="h-full w-1/6 sm:w-full lg:w-[30%] sm:absolute top-0 left-0 lg:static sm:opacity-10 lg:opacity-100 rounded-xl lg:rounded-2xl overflow-hidden">
        <img
          src={icon}
          alt="category"
          className="h-full w-full object-cover"
        />
      </div>  
      <div className="h-full w-[70%] flex flex-col sm:z-[1] lg:pl-2">
        <span className="text-[11px] sm:text-[8px] lg:text-xs font-sans font-medium text-slate-500">
          {name}
        </span>
        <h3 className="flex sm:flex-col font-bold text-lg sm:text-sm lg:text-md text-gray-700 ">
          <span>Rs.</span>
          <span>{amount}</span>
        </h3>
      </div>
    </div>
  );
}
