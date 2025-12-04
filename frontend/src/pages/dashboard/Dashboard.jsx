import DataCard from "../../components/Income-expense-Card/DataCard";
// import i from '../../assets/icons/index'
export default function Dashboard (){
    return(
        <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
           <div className="h-auto">
            <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
            <span className="text-gray-500 text-xs">Welcome! here is your financial overview</span>
           </div>
            <div className="h-1/3 flex gap-3">
                {/* <div className="h-full  min-w-60 bg-slate-600 rounded-xl"></div>   */}
                <DataCard 
                    type="expense"
                    amount="52,999"
                    stats="-2% from last month"
                />
                <DataCard 
                    type="Income"
                    amount="92,599"
                    stats="+8% from last month"
                />
                <div className="h-full w-full flex flex-col justify-between bg-white rounded-xl p-4">
                    <div className="h-5 w-full text-right">
                        <span className="text-sm hover:text-blue-800 cursor-pointer text-blue-500">View all</span>
                    </div>
                    <div className="h-32 grid grid-cols-3 gap-4 ">
                        <div className="h-full  bg-indigo-300 rounded-lg">
                        </div>
                        <div className="h-full  bg-indigo-300 rounded-lg">
                        </div>
                        <div className="h-full  bg-indigo-300 rounded-lg">
                        </div>
                    </div>
                </div>  
            </div>
            {/* <div className="h-auto bg-indigo-100">
                <div></div>
            </div> */}
        </div>
    )
}