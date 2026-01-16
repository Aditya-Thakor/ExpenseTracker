import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import Heading from "../../components/heading/Heading";
import Datacard from "../../components/summaryCards/Datacard";
import i from "../../assets/icons/index";
import InEx from "../../components/charts/analyticsCharts/InvsEx";
import CategoryPieChart from "../../components/charts/analyticsCharts/CategoryPieChart";
import Barchart from "../../components/charts/analyticsCharts/Barchart";
import { useContext, useEffect, useMemo, useState } from "react";
import TransactionContext from "../../context/TransactionContext";
import { Link } from "react-router-dom";

export default function Analytics() {
  const { totalExpense, expenses, totalIncome, setManualFilter,monthlyExpense,crTotalEx, lastMnExTotal} =
    useContext(TransactionContext);
  //add Fn that count the current month's expenses

  const [exTotal,setExTotal]= useState(0);
  useMemo(()=>{
    let ext = monthlyExpense.reduce((sum,num)=>{ return sum+Number(num.total)},0)
      setExTotal(ext);
  },[monthlyExpense])
  const [top5, setTop5] = useState([]);

  const dailyEx = () => {
    const today = new Date().toISOString().split("T")[0];
    const d = expenses.filter((e) => e.date === today + "T00:00:00.000Z");
    // const d = expenses.filter((e)=> e.date == Date.now() )
    // console.log("ddd-",d);
    const todayEx = d.reduce((sum, e) => sum + e.amount, 0);
    // console.log("todayExpense",todayEx);
    return todayEx;
  };
  //  dailyEx();

  const savingRate = () => {
    const sr = ((totalIncome - totalExpense) / totalIncome) * 100;
    // console.log(sr.toFixed(2));
    // console.log("saving rate",Math.floor(sr).toFixed(2));
    return sr.toFixed(2);
  };

  
  // savingRate()
  useEffect(() => {
    const top5Cate = () => {
      const ct = expenses.reduce((cate, ex) => {
        cate[ex.category] = (cate[ex.category] || 0) + ex.amount;
        return cate;
      }, {});
      // console.log("ct--",ct);
      const sortCate = Object.entries(ct)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      // console.log("srt--",sortCate);
      const top5cate = sortCate.map(([category, total]) => ({
        category,
        total,
      }));
      //  console.log("top5",top5);
      return setTop5(top5cate);
    };
    top5Cate();
  }, [expenses]);


  // console.log(top5);
 const exState=()=>{
   let state = ((crTotalEx-lastMnExTotal)/lastMnExTotal)*100;
  //  console.log("state---",state.toFixed(1));
   return Number(state.toFixed(1));
  }

  // SUMMARY CARDS OBJ..
  const summaryCards = [
    {
      name:"This month's spending",
      icon:i.aupWhite,
      amount:`Rs. ${exTotal}`,
      bgfrom:"#E7D1FF",
      bgto:"#FAD6EB",
      shadow:"#DFC2FF",
      border:"#DFC2FF",
      ibgfrom:"#A855F7",
      ibgto:"#EC4899",
      arrow:i.aupRed,
      subtag:`${exState()}% from last month`
    },
    {
      icon:i.calendar,
      name:"Average Daily Expense",
      amount:`Rs. ${dailyEx()}`,
      bgfrom:"#CCE2FF",
      bgto:"#CCFCFF",
      border:"#C3DCFD",
      shadow:"#C3DCFD",
      ibgfrom:"#3B82F6",
      ibgto:"#06B6D4",
      subtag:"Based on current month"
    },
    {
      icon:i.savingIcon,
      name:"Saving rate",
      amount:`${savingRate()} %`,
      bgfrom:"#D2F9DE",
      bgto:"#ACF6D3",
      border:"#8EF5B2",
      shadow:"#8EF5B2",
      ibgfrom:"#22C55E",
      ibgto:"#10B981",
      save:`Rs. ${totalIncome - totalExpense}`,
      subtag:"saved"
    }
  ]

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 mb-5 lg:mb-0">
      {/* heading */}
      <div className="flex lg:justify-between justify-end">
        <Heading
          title="Analytics "
          tagline="Visualize your spending patterns and trends"
        />

        <button className="flex items-center  h-min text-gray-700 bg-white rounded-xl py-2 px-3 gap-2 shadow-sm hover:text-gray-900  hover:shadow-md">
          <span className="">
            <Download className="size-4" />
          </span>
          <Link to="/analytics/report" target="_blank" className="text-xs ">Export report</Link>
        </button>
      </div>
      {/* data card */}
      <div className="h-auto lg:h-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {
          summaryCards.map((cd,ind)=>(
            <Datacard
              key={ind}
              icon={cd.icon}
              name={cd.name}
              amount={cd.amount}
              bgfrom={cd.bgfrom}
              bgto={cd.bgto}
              border={cd.border}
              shadow={cd.shadow}
              ibgfrom={cd.ibgfrom}
              ibgto={cd.ibgto}
              arrow={cd.arrow}
              subtag={cd.subtag}
            />
          ))
        }
        
      </div>

      {/* filter */}
      <div className="h-auto lg:h-20 w-full flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-0 p-3 bg-white rounded-xl z-10 ">
        <div className="text-gray-500 w-28 ">
          <span>Time period : </span>
        </div>
        <div className="h-auto lg:h-full lg:w-[calc(100%-80px)] grid grid-cols-2 lg:grid-cols-5 gap-5  ">
          {/* Add Navlink instead of btns.. */}
          <FilterBtn name="This week" />
          <FilterBtn name="1 Month" clickEvent={()=>setManualFilter(1)} />
          <FilterBtn name="3 Month" clickEvent={()=>setManualFilter(3) }/>
            
          <FilterBtn name="6 Month" clickEvent={()=>setManualFilter(6)} />
          {/* <FilterBtn name="1 Year" /> */}
          <YearBtn/>
        </div>
      </div>

      {/* charts */}
      <div className="h-auto lg:h-screen  w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mb-32">
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

        <div className="h-auto lg:h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
          <div className="h-[15%] w-full flex flex-col">
            <span className="text-lg font-medium text-gray-800">
              Top 5 Spending Categories
            </span>
            <span className="text-xs text-gray-400">
              Highest expense categories
            </span>
          </div>
          <div className="h-[90%] w-full flex flex-col gap-2 p-1 ">
            {top5.map((cate, ind) => (
              <SpendingCard
                key={ind}
                icon={i[cate.category + "light"]}
                name={cate.category}
                expense={cate.total}
                overall={((cate.total / totalExpense) * 100).toFixed(2)}
                pcolor="#22C55E"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterBtn = ({ name, clickEvent }) => {
  return (
    <button onClick={clickEvent} className="h-auto lg:h-full w-full py-1.5 bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl border hover:bg-gray-200 hover:font-bold">
      {name}
    </button>
  );
};

const YearBtn = () => {
  const {count,setCount, setManualFilter}=useContext(TransactionContext);
  return (
    <div className="h-auto lg:h-full w-full py-1.5 bg-gray-50 text-gray-600 flex items-center justify-between rounded-xl border px-5">
      <span>
        <ChevronLeft
          className="hover:text-neutral-800"
          onClick={() => setCount(count - 1)}
        />
      </span>
      <p 
        className="text-neutral-600 text-shadow-sm font-sans font-medium transition ease-in hover:text-neutral-800 cursor-default"
        onClick={()=>setManualFilter(12)}
      >
        {count}
      </p>
      <span>
        <ChevronRight
          className="hover:text-neutral-800"
          onClick={() => setCount(count + 1)}
        />
      </span>
    </div>
  );
};

const ChartCard = ({ title, subtag, chart, filter = false }) => {
  // const [count,setCount]=useState(2025)
  const { count, setCount } = useContext(TransactionContext);
  return (
    <div>
      {filter ? (
        <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
          <div className="h-[15%] w-full flex items-center">
            <div className="h-full w-full flex flex-col">
              <span className="text-lg font-medium text-gray-800">{title}</span>
              <span className="text-xs text-gray-400">{subtag}</span>
            </div>
            <div className="h-3/4 w-32 flex justify-between items-center text-neutral-400">
              <span>
                <ChevronLeft
                  className="hover:text-neutral-800"
                  onClick={() => setCount(count - 1)}
                />
              </span>
              <p className="text-neutral-600 text-shadow-sm font-sans font-medium transition ease-in hover:text-neutral-800 cursor-default">
                {count}
              </p>
              <span>
                <ChevronRight
                  className="hover:text-neutral-800"
                  onClick={() => setCount(count + 1)}
                />
              </span>
            </div>
          </div>
          <div className="h-[85%] w-full selection: ">{chart}</div>
        </div>
      ) : (
        <div className="h-80 w-full flex flex-col gap-3 p-3 bg-white rounded-lg">
          <div className="h-[15%] w-full flex flex-col">
            <span className="text-lg font-medium text-gray-800">{title}</span>
            <span className="text-xs text-gray-400">{subtag}</span>
          </div>
          <div className="h-[85%] w-full selection: ">{chart}</div>
        </div>
      )}
    </div>
  );
};

const SpendingCard = ({ icon, name, expense, overall, pcolor = "#6B7280" }) => {
  const ct = {
    food: "#F97316",
    "bills&utilities": "#A855F7",
    travel: "#22C55E",
    shopping: "#EC4899",
    healthcare: "#EF4343",
    transportation: "#3B82F6",
    education: "#EAB308",
    entertainment: "#6366F1",
  };
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
            style={{
              width: `${overall}%`,
              backgroundColor: `${ct[name]}` || pcolor,
            }}
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
