import DataCard from "../../components/Income-expense-Card/DataCard";
import i from "../../assets/icons/index";
import CategoryTempCard from "../../components/categoryCard/CategoryTempCard";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import C1 from "../../components/charts/categoryCharts/C1";
import C2 from "../../components/charts/categoryCharts/C2";
import MyDoughnut from "../../components/charts/categoryCharts/C3";
import ExpenseDoughnutChart from "../../components/charts/categoryCharts/Doughnut";
import MonthlyExpenseBarChart from "../../components/charts/categoryCharts/Bar";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../context/TransactionContext";
export default function Dashboard() {
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser._id;
  // console.log(userId);
  const [user, setUser] = useState(null);
  // const [trans, setTransactions] = useState([]);
  const [recent5tr, setRecent5tr] = useState([]);
  const [topExCategories, setTopExCate] = useState([]);
  // const [otherCate, setOtherCate]=useState([]);

  // const [expenses, setExpenses] = useState([]);
  // const [totalEx, setTotalEx] = useState(0);
  // const [incomes,setIncomes]=useState([]);
  // const [totalIn,setTotalIn]= useState(0);

  const {transactions,totalExpense, totalIncome, monthlyExpense } =
    useContext(TransactionContext);

  const [vahover, setVaHover] = useState(null);

  let cm = new Date()
  let fl = cm.getMonth();
  console.log("M-",fl);
  
  console.log("monthlyEx", monthlyExpense);
  

  useEffect(() => {
    async function fetchUser() {
      await fetch("http://localhost:5000/usersdata/")
        .then((res) => res.json())
        .then((data) => {
          let usr = data.find((i) => i._id === userId);
          // console.log(user);
          setUser(usr);
        })
        .catch((error) => {
          console.log("error at fetching userdata at dashboard", error);
        });
    }
    fetchUser();
  }, [userId]);

  useEffect(() => {
    console.log("user updated!!!", user);
    if (user === null) return;

    const getTransactions = () => {
      const tr = user?.transactions;
      // console.log("tr-",tr);
      // setTransactions(tr);
      if (!tr) {
        return
      }
      const recentT = [...tr]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      // console.log("recents", recentT);
      setRecent5tr(recentT);

      // const ex = tr.filter((e) => e.type === "expense");
      // console.log("ex-",ex);
      // setExpenses(ex);
      // console.log(expenses);
      // const inc = tr.filter((i) => i.type === "income");
      // console.log(inc);
      // setIncomes(inc);

      // const tl = expenses.reduce((sum,num)=>{
      //   return sum + Number(num.amount)
      // },0)
      // // console.log('total-',tl);
      // setTotalEx(tl);

      const ct = transactions.reduce((cate, tex) => {
        if (tex.type === "expense") {
          cate[tex.category] = (cate[tex.category] || 0) + tex.amount;
        }
        return cate;
      }, {});
      // console.log("ct- ", ct);
      const sortCate = Object.entries(ct)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
      // console.log(sortCate);

      const top3 = sortCate.map(([category, total]) => ({ category, total }));
      // console.log(top3);
      setTopExCate(top3);

      // const otherCate = expenses.filter(e=>e.category == topExCategories[0]?.category
      // )
      // console.log("otr-",otherCate);
      // setOtherCate(otherCate);

      // const tIn = incomes.reduce((sum, num) => {
      //   return sum + Number(num.amount);
      // }, 0);
      // console.log(tIn);
      // setTotalIn(tIn);
    };
    getTransactions();
  }, [user]);
  // const labels=["a","b","c","d"]

  // console.log("otr-",otherCate);

  // console.log(topExCategories);

  const labels = () => {
    const topct = topExCategories.map((n) => n.category);
    const lbl = [...topct, "other"];
    return lbl;
    // return topExCategories.map(n=>n.category) || "Other";
  };
  // const datas=["54511","34511","43222","55433"]
  const datas = () => {
    const topstotal = topExCategories.map((n) => n.total);
    const total = topstotal.reduce((sum, num) => {
      return sum + Number(num);
    }, 0);
    const otherTotal = totalExpense - total;
    // console.log("tttt=",otherTotal);

    const dt = [...topstotal, otherTotal];
    return dt;
    //  return topExCategories.map(n=>n.total) || "50000";
  };

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
      <div className="h-auto">
        <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
        {/* <h2>{n}{tex}</h2> */}
        <span className="text-gray-500 text-xs">
          Welcome! here is your financial overview
        </span>
      </div>
      <div className="h-40 flex gap-3">
        {/* <div className="h-full  min-w-60 bg-slate-600 rounded-xl"></div>   */}
        <DataCard
          type="expense"
          amount={totalExpense}
          stats="-2% from last month"
        />
        <DataCard
          type="Income"
          amount={totalIncome}
          stats="+8% from last month"
        />
        <div className="h-full w-full flex flex-col justify-around bg-white rounded-xl px-4 py-2">
          <div className="h-5 w-full flex justify-between items-center">
            <span className="text-sm text-slate-400">
              Top expenses in category
            </span>
            <span
              className="text-sm py-0.5 px-2 cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white hover:rounded-xl transition-all ease-in-out"
              onClick={() => navigate("/category")}
            >
              View all
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 ">
            {topExCategories.map((c, ind) => (
              <CategoryTempCard
                key={ind}
                icon={i[c.category]}
                name={c.category.toUpperCase()}
                amount={c.total}
              />
            ))}
            {/* <CategoryTempCard
              icon={i.bill}
              name="Bills & Utilities"
              amount="34,000"
            />

            <CategoryTempCard
              icon={i.transportation}
              name="Transportation"
              amount="25,000"
            />

            <CategoryTempCard
              icon={i.food}
              name="Food & dining"
              amount="20,000"
            /> */}
          </div>
        </div>
      </div>
      <div className="h-3/4 flex gap-3">
        {/* transactions */}
        <div className="h-full w-3/5 flex  flex-col gap-4 p-4 rounded-xl bg-white">
          <div className="h-[10%] flex justify-between items-center ">
            <h2 className="text-slate-700 font-normal text-lg">
              Recent transactions
            </h2>
            <span
              className="text-xs relative text-blue-500 hover:text-blue-800 transition-all ease-in-out cursor-pointer"
              onClick={() => navigate("/transaction")}
              onMouseEnter={() => setVaHover("trans")}
              onMouseLeave={() => setVaHover(null)}
            >
              <span>View all</span>
              <span
                className={`h-px absolute bottom-0 left-0 rounded-full transition-all ease-linear bg-blue-800 ${
                  vahover === "trans" ? "w-11" : "w-0"
                }`}
              ></span>
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
            {recent5tr.map((tr) => (
              <TransactionCard
                key={tr._id}
                icon={tr.type === "expense" ? i.expense : i.income}
                tag={tr.description}
                date={tr.date.replace("T00:00:00.000Z", "")}
                amount={tr.amount}
                type={tr.type}
                category={tr.type === "expense" ? tr.category : tr.incomeFrom}
              />
            ))}

            {/* <TransactionCard
              icon={i.code}
              tag="Freelance work"
              date="16 Nov 2025"
              amount="12,000"
              type="income"
            />

            <TransactionCard
              icon={i.dining}
              tag="Dinner"
              date="15 Nov 2025"
              amount="5,000"
              type="expense"
            />
            <TransactionCard
              icon={i.train}
              tag="Metro pass"
              date="15 Nov 2025"
              amount="3,000"
              type="expense"
            />
            <TransactionCard
              icon={i.office}
              tag="Salary"
              date="15 Nov 2025"
              amount="55,000"
              type="income"
            /> */}
          </div>
        </div>
        {/* doughnut chart */}
        <div className="h-full w-2/5 flex flex-col gap-3 p-4 rounded-xl bg-white">
          <div className="h-full w-full">
            <div className="h-[10%] flex justify-between items-center  ">
              <h2 className="text-slate-700 font-normal text-lg">
                Category vise spending
              </h2>
              <span
                className="text-xs relative text-blue-500 hover:text-blue-800 cursor-pointer"
                onClick={() => navigate("/analytics")}
                onMouseEnter={() => setVaHover("cate")}
                onMouseLeave={() => setVaHover(null)}
              >
                <span>View all</span>
                <span
                  className={`h-px absolute bottom-0 left-0 rounded-full transition-all ease-linear bg-blue-800 ${
                    vahover === "cate" ? "w-11" : "w-0"
                  }`}
                ></span>
              </span>
            </div>
            <div className="h-[90%] w-full">
              <div className="h-full w-full p-2">
                <div className="h-full w-full ">
                  <ExpenseDoughnutChart lbls={labels()} cdata={datas()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full p-4 rounded-xl bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-slate-700 font-normal text-lg">
            Monthly expense
          </h2>
          <span
            className="text-xs relative text-blue-500 hover:text-blue-800 cursor-pointer"
            onClick={() => navigate("/analytics")}
            onMouseEnter={() => setVaHover("deta")}
            onMouseLeave={() => setVaHover(null)}
          >
            <span>Details</span>
            <span
              className={`h-px absolute bottom-0 left-0 rounded-full transition-all ease-linear bg-blue-800 ${
                vahover === "deta" ? "w-11" : "w-0"
              }`}
            ></span>
          </span>
        </div>
        <div className="h-96 w-full">
          <div className="h-full w-full">
            <MonthlyExpenseBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

// prototyped code (date: 10/12)
//  <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
//       {/* heading */}
//       <div className="h-auto">
//         <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
//         <span className="text-gray-500 text-xs">
//           Welcome! here is your financial overview
//         </span>
//       </div>
//       {/* income/expense cards */}
//       <div className="h-40 flex gap-3">
//         {/* <div className="h-full  min-w-60 bg-slate-600 rounded-xl"></div>   */}
//         <DataCard type="expense" amount="52,999" stats="-2% from last month" />
//         <DataCard type="Income" amount="92,599" stats="+8% from last month" />
//         <div className="h-full w-full flex flex-col justify-between bg-transparent relative">
//           {/* <div className="h-10 w-min rounded-xl text-right">
//             <span
//               className="h-full  text-sm flex items-center justify-end hover:text-blue-800 cursor-pointer text-blue-500 bg-white rounded-xl"
//             >
//               View all <span> <ChevronRight /></span>
//             </span>
//           </div> */}
//           <span className="bg-white text-nowrap h-10 w-min px-4 py-5 text-sm rounded-lg flex items-center justify-between gap-3 absolute top-0 right-0">
//             View all <ChevronRight />
//           </span>

//           <div className=" grid grid-cols-3 gap-4 w-full absolute bottom-0 ">
//             <CategoryTempCard
//               icon={i.food}
//               name="Food & Dining"
//               amount="10000"
//             />

//             <CategoryTempCard
//               icon={i.transportation}
//               name="Transportation"
//               amount="8500"
//             />

//             <CategoryTempCard
//               icon={i.bill}
//               name="Entertainment"
//               amount="3500"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="h-3/4 flex gap-3">

//       {/* transations */}
//         <div className="h-full w-3/5 flex flex-col gap-4 p-4 rounded-xl bg-white">
//           <div className="h-[10%] flex justify-between items-center ">
//             <h2 className="text-slate-700 font-normal text-lg">
//               Recent transactions
//             </h2>
//             <span className="text-xs text-blue-500 hover:text-blue-800 cursor-pointer">
//               View all
//             </span>
//           </div>
//           <div className="h-[90%] w-full flex flex-col gap-4">
//             {/*
//                 <div className="h-1/4 w-full flex justify-between items-center px-5 bg-emerald-100 rounded-xl">
//                     <div className="flex items-center gap-4">
//                         <div>
//                         <img src={i.code} alt="category" />
//                         </div>
//                         <div>
//                         <h3 className="text-slate-900 font-sans font-semibold text-md ">
//                             Freelance work
//                         </h3>
//                         <span className="text-xs text-slate-500">16 Nov 2025</span>
//                         </div>
//                     </div>
//                     <div>
//                         <h2 className="text-xl text-green-600"> 12,000</h2>
//                     </div>
//                 </div>
//             */}

//             <TransactionCard
//               icon={i.code}
//               tag="Freelance work"
//               date="16 Nov 2025"
//               amount="12,000"
//               type="income"
//             />

//             <TransactionCard
//               icon={i.dining}
//               tag="Shopping"
//               date="15 Nov 2025"
//               amount="5,000"
//               type="expense"
//             />
//             <TransactionCard
//               icon={i.office}
//               tag="Shopping"
//               date="15 Nov 2025"
//               amount="55,000"
//               type="income"
//             />
//           </div>
//         </div>

//         {/* chrts */}
//         <div className="h-full w-2/5 flex flex-col gap-3 p-4 rounded-xl bg-white">
//           <div className="h-1/2 w-full">
//             <div className="h-[10%] flex justify-between items-center  ">
//               <h2 className="text-slate-700 font-sans font-medium text-sm">
//                 Category vise spending
//               </h2>
//             </div>
//             <div className="h-[90%] w-full">
//                 <div className="h-full w-full p-2">
//                    <div className="h-32 w-1/2 ">
//                    {/* <MyDoughnut/> */}
//                    </div>
//                 </div>
//             </div>
//           </div>
//           <div className="h-1/2 w-full bg-white">
//             <div className="h-[10%] flex justify-between items-center  ">
//               <h2 className="text-slate-700 font-sans font-medium text-sm">
//                 Monthly Expenses
//               </h2>
//             </div>
//             <div className="h-[90%] w-full">
//                 <div className="h-full w-full p-2">
//                     <div className="h-full w-full ">
//                       {/* <C2 /> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>

//       </div>
//     </div>
