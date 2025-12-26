export default function FeaturesCard({title, p,icon, ibgfrom, ibgto}) {
    const style= {
        background: `linear-gradient(to bottom right , ${ibgfrom}, ${ibgto})`
    }
    
    return (
    <div className="h-56 min-w-80 flex flex-col  gap-3 bg-white border rounded-3xl p-5">
      <div 
        className="size-14 flex justify-center items-center text-white rounded-2xl "
        style={style}
      >
        {icon}
      </div>
      <div className="text-lg text-gray-800">
        <h5>{title}</h5>
      </div>
      <div className="w-4/5 text-justify text-gray-500">
        <span className="text-sm    ">
          {p}
        </span>
      </div>
    </div>
  );
}
