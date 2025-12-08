import DataCard from "../../components/Income-expense-Card/DataCard";
import i from "../../assets/icons/index";
import CategoryTempCard from "../../components/categoryCard/CategoryTempCard";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import C1 from "../../components/charts/categoryCharts/C1";
import C2 from "../../components/charts/categoryCharts/C2";
import MyDoughnut from "../../components/charts/categoryCharts/C3";
import ExpenseDoughnutChart from "../../components/charts/categoryCharts/Doughnut";
export default function Dashboard() {
  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
      <div className="h-auto">
        <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
        <span className="text-gray-500 text-xs">
          Welcome! here is your financial overview
        </span>
      </div>
      <div className="h-40 flex gap-3">
        {/* <div className="h-full  min-w-60 bg-slate-600 rounded-xl"></div>   */}
        <DataCard type="expense" amount="52,999" stats="-2% from last month" />
        <DataCard type="Income" amount="92,599" stats="+8% from last month" />
        <div className="h-full w-full flex flex-col justify-around bg-white rounded-xl px-4 py-2">
          <div className="h-5 w-full text-right">
            <span className="text-sm hover:text-blue-800 cursor-pointer text-blue-500">
              View all
            </span>
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
      <div className="h-3/4 flex gap-3">
        <div className="h-full w-3/5 flex flex-col gap-4 p-4 rounded-xl bg-white">
          <div className="h-[10%] flex justify-between items-center ">
            <h2 className="text-slate-700 font-normal text-lg">
              Recent transactions
            </h2>
            <span className="text-xs text-blue-500 hover:text-blue-800 cursor-pointer">
              View all
            </span>
          </div>
          <div className="h-[90%] w-full flex flex-col gap-4">
            {/* 
                <div className="h-1/4 w-full flex justify-between items-center px-5 bg-emerald-100 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div>
                        <img src={i.code} alt="category" />
                        </div>
                        <div>
                        <h3 className="text-slate-900 font-sans font-semibold text-md ">
                            Freelance work
                        </h3>
                        <span className="text-xs text-slate-500">16 Nov 2025</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-green-600"> 12,000</h2>
                    </div>
                </div> 
            */}

            <TransactionCard
              icon={i.code}
              tag="Freelance work"
              date="16 Nov 2025"
              amount="12,000"
              type="income"
            />

            <TransactionCard
              icon={i.dining}
              tag="Shopping"
              date="15 Nov 2025"
              amount="5,000"
              type="expense"
            />
            <TransactionCard
              icon={i.office}
              tag="Shopping"
              date="15 Nov 2025"
              amount="55,000"
              type="income"
            />
          </div>
        </div>
        <div className="h-full w-2/5 flex flex-col gap-3 p-4 rounded-xl bg-white">
          <div className="h-full w-full">
            <div className="h-[10%] flex justify-between items-center  ">
              <h2 className="text-slate-700 font-sans font-medium text-sm">
                Category vise spending
              </h2>
            </div>
            <div className="h-[90%] w-full">
                <div className="h-full w-full p-2">
                   <div className="h-full w-full ">
                    <ExpenseDoughnutChart/>
                   {/* <MyDoughnut/> */}
                   {/* <C2/> */}
                   </div>
                </div>
            </div>
          </div>
              {/* <div className="h-1/2 w-full bg-white">
                <div className="h-[10%] flex justify-between items-center  ">
                  <h2 className="text-slate-700 font-sans font-medium text-sm">
                    Monthly Expenses
                  </h2>
                </div>
                <div className="h-[90%] w-full">
                    <div className="h-full w-full p-2">
                        <div className="h-full w-full ">
                          <C2 />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
