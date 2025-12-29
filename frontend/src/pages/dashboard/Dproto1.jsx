export default function Dproto() {
  return (
    <div className="h-screen w-full p-3">
      {/* heading */}
      <div className="h-auto w-full">
        <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
        <span className="text-gray-500 text-xs">
          Welcome! here is your financial overview
        </span>
      </div>
      <div className="h-[90%] w-full bg-white flex gap-3">
        <div className="h-full w-3/4 bg-indigo-100">   
            <div className="h-1/4 w-full flex gap-5 ">
                <div className="h-full w-1/2 bg-fuchsia-100 rounded-xl"></div>
                <div className="h-full w-1/2 bg-fuchsia-100 rounded-xl"></div>
            </div>
            <div className="h-1/5 w-full bg-gray-300 mt-2"></div>
            <div className="h-2/4 w-full bg-gray-700 mt-2"></div>
        </div>
        <div className="h-full w-1/4 bg-indigo-100">         </div>
      </div>
    </div>
  );
}
