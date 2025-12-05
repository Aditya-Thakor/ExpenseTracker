import DataCard from "../../components/Income-expense-Card/DataCard";
import i from '../../assets/icons/index'
import CategoryTempCard from "../../components/categoryCard/CategoryTempCard";
export default function Dashboard (){
    return(
        <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
           <div className="h-auto">
            <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
            <span className="text-gray-500 text-xs">Welcome! here is your financial overview</span>
           </div>
            <div className="h-40 flex gap-3">
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
                <div className="h-full w-full flex flex-col justify-around bg-white rounded-xl px-4 py-2">
                    <div className="h-5 w-full text-right">
                        <span className="text-sm hover:text-blue-800 cursor-pointer text-blue-500">View all</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 ">
                        <CategoryTempCard
                            icon={i.food}
                            name="Food & Dining"
                            amount="10000"
                        />

                        <CategoryTempCard
                            icon={i.transportation}
                            name="Transportation"
                            amount="8500"
                        />
                        
                        <CategoryTempCard
                            icon={i.entertainment}
                            name="Entertainment"
                            amount="3500"
                        />
                        
                    </div>
                </div>  
            </div>
            <div className="h-3/4 flex">
                <div className="h-full w-3/5 bg-red-100">    </div>
                <div className="h-full w-2/5 bg-green-100">    </div>
            </div>
        </div>
    )
}