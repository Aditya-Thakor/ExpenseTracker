export default function FeaturesCard({title, p,icon, ibgfrom, ibgto}) {
    const style= {
        background: `linear-gradient(to bottom right , ${ibgfrom}, ${ibgto})`
    }
    
    return (
    <div className="lg:h-56 max-w-44 sm:min-w-56 lg:min-w-80 flex flex-col gap-2 lg:gap-3 bg-white border rounded-3xl p-5">
      <div 
        className="size-11 lg:size-14 flex justify-center items-center text-white rounded-2xl "
        style={style}
      >
        {icon}
      </div>
      <div className="text-sm sm:text-lg text-gray-800">
        <h5>{title}</h5>
      </div>
      <div className="w-full lg:w-4/5 lg:text-justify text-gray-500">
        <span className="text-xs sm:text-sm ">
          {p}
        </span>
      </div>
    </div>
  );
}
