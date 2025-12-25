import { Download } from "lucide-react";
import Heading from "../../components/heading/Heading";
import Datacard from "../../components/summaryCards/Datacard";
import i from "../../assets/icons/index";
import InEx from "../../components/charts/analyticsCharts/InvsEx";
import CategoryPieChart from "../../components/charts/analyticsCharts/CategoryPieChart";
import Barchart from "../../components/charts/analyticsCharts/Barchart";
import { useContext } from "react";
import TransactionContext from "../../context/TransactionContext";

export default function Analytics() {

  const {totalExpense,expenses, totalIncome}= useContext(TransactionContext);
  //add Fn that count the current month's expenses

  const dailyEx = ()=>{
    const today  = new Date().toISOString().split("T")[0];
    const d = expenses.filter((e)=> e.date === today +"T00:00:00.000Z");
    // const d = expenses.filter((e)=> e.date == Date.now() )
    // console.log("ddd-",d); 
    const todayEx = d.reduce((sum,e)=>(sum + e.amount),0)
    // console.log("todayExpense",todayEx);
    return todayEx
  }
//  dailyEx();

const savingRate = ()=>{
  const sr = ((totalIncome-totalExpense)/totalIncome)*100
  // console.log(sr.toFixed(2));
  // console.log("saving rate",Math.floor(sr).toFixed(2));
  return sr.toFixed(2);
}
// savingRate()
  

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 mb-5">
      {/* heading */}
      <div className="flex justify-between">
        <Heading
          title="Analytics "
          tagline="Visualize your spending patterns and trends"
        />
        
        <button className="flex items-center h-min text-gray-700 bg-white rounded-xl py-2 px-3 gap-2 shadow-sm hover:text-gray-900  hover:shadow-md">
          <span className="">
            <Download className="size-4" />
          </span>
          <span className="text-xs ">Export report</span>
        </button>
      </div>
      {/* data card */}
      <div className="h-28 grid grid-cols-3  gap-4">
        <Datacard
          icon={i.aupWhite}
          name="This month's spending"
          amount={`Rs. ${totalExpense}`}
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
          amount={`Rs. ${dailyEx()}`}
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
          name="Saving rate"
          amount={`${savingRate()} %`}
          bgfrom="#D2F9DE"
          bgto="#ACF6D3"
          border="#8EF5B2"
          shadow="#8EF5B2"
          ibgfrom="#22C55E"
          ibgto="#10B981"
          save={`Rs. ${totalIncome-totalExpense}`}
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
        <ChartCard
          title="Income vs Expenses Trend"
          subtag="Last  6 months overview"
          chart={<InEx />}
        />
        <ChartCard
          title="Expense by Category"
          subtag="Current month distribution"
          chart={<CategoryPieChart />}
        />
        <ChartCard
          title="Monthly Spending Pattern"
          subtag="Expense trend over time"
          chart={<Barchart />}
        />

        <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
          <div className="h-[15%] w-full flex flex-col">
            <span className="text-lg font-medium text-gray-800">
              Top 5 Spending Categories
            </span>
            <span className="text-xs text-gray-400">
              Highest expense categories
            </span>
          </div>
          <div className="h-[90%] w-full flex flex-col gap-2 p-1 ">
            {/* <div className="h-16 w-full flex gap-2  ">
              <div className="h-full w-[10%]">
                <img src={i.travelLight} alt="icon" className="h-full w-min" />
              </div>
              <div className="h-full w-[75%] flex flex-col gap-3 ">
                <span className="text-md w-full text-gray-800">Travel</span>
                <div className="h-2 w-full border rounded-lg relative">
                  <span className="h-full w-1/2 absolute rounded-lg bg-green-500"></span>
                </div>
              </div>
              <div className="h-full w-[15%] flex flex-col items-end ">
                <span className="font-medium text-gray-800">Rs. 65000</span>
                <span className="text-xs text-gray-500 ">21.5%</span>
              </div>
            </div> */}
            <SpendingCard 
                icon={i.travelLight}
                name="Travel"
                expense="65,000"
                overall="21.5"
                pcolor="#22C55E"
            />
            <SpendingCard 
                icon={i.billLight}
                name="Bills & Utilities"
                expense="52,000"
                overall="17.5"
                pcolor="#A855F7"
            />
            <SpendingCard 
                icon={i.foodlight}
                name="Food & Dining"
                expense="45,000"
                overall="17.5"
                pcolor="#F97316"
            />
            <SpendingCard 
                icon={i.shoppinglight}
                name="Shopping"
                expense="42,000"
                overall="13.5"
                pcolor="#EC4899"
            />
            <SpendingCard 
                icon={i.transportationLight}
                name="Transportation"
                expense="38,000"
                overall="12.5"
                pcolor="#3B82F6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterBtn = ({ name }) => {
  return (
    <bitton className="h-full w-full bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl border">
      {name}
    </bitton>
  );
};

const ChartCard = ({ title, subtag, chart }) => {
  return (
    <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
      <div className="h-[15%] w-full flex flex-col">
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span className="text-xs text-gray-400">{subtag}</span>
      </div>
      <div className="h-[85%] w-full selection: ">{chart}</div>
    </div>
  );
};

const SpendingCard = ({icon,name,expense, overall,pcolor="#6B7280"}) => {
  return (
    <div className="h-[15%] w-full flex gap-2  ">
      <div className="h-full w-[10%]">
        <img src={icon} alt="icon" className="h-full w-min" />
      </div>
      <div className="h-full w-[75%] flex flex-col gap-3 ">
    <span className="text-md w-full text-gray-800">{name}</span>
        <div className="h-3 w-full border rounded-lg relative">
          <span 
            className={`h-full  absolute rounded-lg `}
            style={{width:`${overall}%`, backgroundColor:`${pcolor}`}}
           ></span>
        </div>
      </div>
      <div className="h-full w-[15%] flex flex-col items-end ">
        <span className="font-medium text-gray-800">Rs. {expense}</span>
        <span className="text-xs text-gray-500 ">{overall} %</span>
      </div>
    </div>
  );
};
