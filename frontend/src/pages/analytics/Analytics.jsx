import { Download } from "lucide-react";
import Heading from "../../components/heading/Heading";
import Datacard from "../../components/summaryCards/Datacard";
import i from "../../assets/icons/index";
import InEx from "../../components/charts/analyticsCharts/InvsEx";
import CategoryPieChart from "../../components/charts/analyticsCharts/CategoryPieChart";
import Barchart from "../../components/charts/analyticsCharts/Barchart";

export default function Analytics(){
    return(
         <div className="h-auto w-full flex flex-col gap-5 p-5 mb-5">
            {/* heading */}
            <div className="flex justify-between">
                <Heading title="Analytics " tagline="Visualize your spending patterns and trends" />
                <button className="flex items-center h-min text-gray-700 bg-white rounded-xl py-2 px-3 gap-2 shadow-sm hover:text-gray-900  hover:shadow-md">
                    <span className=""><Download className="size-4"/></span>
                    <span className="text-xs ">Export report</span>
                </button>
            </div>
            {/* data card */}
            <div className="h-28 grid grid-cols-3  gap-4">
                <Datacard
                    icon={i.aupWhite}
                    name="This month's spending"
                    amount="63,000"
                    bgfrom="#E7D1FF"
                    bgto="#FAD6EB"
                    border="#DFC2FF"
                    shadow="#DFC2FF"
                    ibgfrom="#A855F7"
                    ibgto="#EC4899"
                    arrow={i.aupRed}
                    subtag="23.5% from last month"
                />
                <Datacard
                    icon={i.calendar}
                    name="Average Daily Expense"
                    amount="2,100"
                    bgfrom="#CCE2FF"
                    bgto="#CCFCFF"
                    border="#C3DCFD"
                    shadow="#C3DCFD"
                    ibgfrom="#3B82F6"
                    ibgto="#06B6D4"
                    subtag="Based on current month"
                />
                <Datacard
                    icon={i.savingIcon}
                    name="This month's spending"
                    amount="63,000"
                    bgfrom="#D2F9DE"
                    bgto="#ACF6D3"
                    border="#8EF5B2"
                    shadow="#8EF5B2"
                    ibgfrom="#22C55E"
                    ibgto="#10B981"
                    save="Rs. 59,000"
                    subtag="saved"
                />
            </div>

            {/* filter */}
            <div className="h-20 w-full flex items-center p-3 bg-white rounded-xl">
                <div className="text-gray-500 w-28 ">
                    <span>Time period : </span>
                </div>
                <div className="h-full w-[calc(100%-80px)] grid grid-cols-5 gap-5  ">
                    {/* Add Navlink instead of btns.. */}
                    <FilterBtn name="This week" />
                    <FilterBtn name="1 Month" />
                    <FilterBtn name="3 Month" />
                    <FilterBtn name="6 Month" />
                    <FilterBtn name="1 Year" />
                </div>  
            </div>

            {/* charts */}
            <div className="h-screen w-full grid grid-cols-2 gap-5 ">
                <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
                        <div className="h-[15%] w-full flex flex-col">
                            <span className="text-lg font-medium text-gray-800">
                                Income vs Expenses Trend
                            </span>
                            <span className="text-xs text-gray-400">
                                Last  6 months overview
                                
                            </span>
                        </div>
                    <div className="h-[85%] w-full ">
                           <InEx/>
                    </div>
                </div>
                <ChartCard 
                    title="Expense by Category" 
                    subtag="Current month distribution" 
                    chart={<CategoryPieChart/>}
                />
                <ChartCard 
                    title="Monthly Spending Pattern" 
                    subtag="Expense trend over time" 
                    chart={<Barchart/>}
                />
                <ChartCard title="Top 5 Spending Categories" subtag="Highest expense categories" />
            </div>
        </div>
    )
}


const FilterBtn = ({name})=>{
    return(
        <bitton className="h-full w-full bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl border">
            {name}
        </bitton>
    )
}

const ChartCard = ({title, subtag,chart})=>{
    return(
        <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
                        <div className="h-[15%] w-full flex flex-col">
                            <span className="text-lg font-medium text-gray-800">
                                {title}
                            </span>
                            <span className="text-xs text-gray-400">
                                {subtag}
                            </span>
                        </div>
                    <div className="h-[85%] w-full ">
                        {chart}
                    </div>
        </div>
    )
}