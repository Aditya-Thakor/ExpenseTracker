import DataCard from "../../components/Income-expense-Card/DataCard";
import i from "../../assets/icons/index";
import CategoryTempCard from "../../components/categoryCard/CategoryTempCard";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import ExpenseDoughnutChart from "../../components/charts/categoryCharts/Doughnut";
import MonthlyExpenseBarChart from "../../components/charts/categoryCharts/Bar";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
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

  const { transactions, totalExpense, crntMnCate, monthlyExpense,currentMnEx, monthlyIncome } =
    useContext(TransactionContext);

    const [inTotal,setInTotal]= useState(0);
    const [exTotal,setExTotal]= useState(0);
// console.log("this month exxx");
// console.log(monthlyExpense);
// console.log('----------');
// console.log(currentMnEx);

    useMemo(()=>{
      let int= monthlyIncome.reduce((sum,num)=> { return sum+Number(num.total)},0 )
      // console.log("INCOME TOTAL:-",int);
      setInTotal(int);
      
      // let ext = monthlyExpense.reduce((sum,num)=>{ return sum+Number(num.total)},0)
      // setExTotal(ext);
      let ext = currentMnEx.reduce((sum,num)=>{ return sum+Number(num.amount)},0)
      setExTotal(ext);


      const sortCate = Object.entries(crntMnCate)?.sort((a, b) => b[1] - a[1]).slice(0, 3);
        console.log("crnt mn Top cate",sortCate);
      const top3 = sortCate.map(([category, total]) => ({ category, total }));
      // console.log(top3);
      setTopExCate(top3);
    },[monthlyIncome,monthlyExpense,crntMnCate])

  const [vahover, setVaHover] = useState(null);

  let cm = new Date();
  let fl = cm.getMonth();
  // console.log("M-", fl);

  // console.log("monthlyEx", monthlyExpense);

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
        return;
      }
      const recentT = [...tr]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      // console.log("recents", recentT);
      setRecent5tr(recentT);

      const ct = transactions.reduce((cate, tex) => {
        if (tex.type === "expense") {
          cate[tex.category] = (cate[tex.category] || 0) + tex.amount;
        }
        return cate;
      }, {});
      // console.log("ct- ", ct);
      // const sortCate = Object.entries(ct)
      //   .sort((a, b) => b[1] - a[1])
      //   .slice(0, 3);
      // // console.log(sortCate); // <- get overall category and total

      // const sortCate = Object.entries(crntMnCate)
      //   ?.sort((a, b) => b[1] - a[1])
      //   .slice(0, 3);
      //   console.log("****",sortCate);
      // const top3 = sortCate.map(([category, total]) => ({ category, total }));
      // // console.log(top3);
      // setTopExCate(top3);
    };
    getTransactions();
  }, [user]);

  const labels = () => {
    const topct = topExCategories.map((n) => n.category);
    const lbl = topct.length>3?[...topct, "other"] : [...topct];
    return lbl;
    // return topExCategories.map(n=>n.category) || "Other";
  };
  // const datas=["54511","34511","43222","55433"]
  const datas = () => {
    const topstotal = topExCategories.map((n) => n.total);
    const total = topstotal.reduce((sum, num) => {
      return sum + Number(num);
    }, 0);
    // const otherTotal = totalExpense - total;
    const otherTotal = exTotal - total;
    // console.log("tttt=",otherTotal);

    const dt = [...topstotal, otherTotal];
    return dt;
    //  return topExCategories.map(n=>n.total) || "50000";
  };

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 font-lato">
      <div className="h-auto hidden sm:block">
        <h1 className="text-gray-800 text-2xl font-bold">Dashboard</h1>
        {/* <h2>{n}{tex}</h2> */}
        <span className="text-gray-500 text-xs">
          Welcome! here is your financial overview
        </span>
      </div>
      <div className="h-auto sm:h-40 flex flex-col sm:flex-row   gap-3">
        {/* <div className="h-full  min-w-60 bg-slate-600 rounded-xl"></div>   */}
       <div className="h-full w-full xl:w-1/2 flex  gap-3"> 
        <DataCard
          type="expense"
          amount={exTotal}
          stats="-2% from last month"
        />
        <DataCard
          type="Income"
          amount={inTotal}
          stats="+8% from last month"
        />
        </div>
        <div className="h-full w-full flex flex-col justify-around gap-3 sm:gap-0 bg-white rounded-xl px-4 py-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {topExCategories.map((c, ind) => (
              <CategoryTempCard
                key={ind}
                icon={i[c.category]}
                name={c.category.toUpperCase()}
                amount={c.total}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-3/4 w-full flex flex-col lg:flex-row gap-3">
        {/* transactions */}
        <div className="h-full lg:w-3/5 flex  flex-col gap-4 p-4 rounded-xl bg-white">
          <div className="h-[10%] flex justify-between items-center ">
            <h2 className="text-slate-700 font-normal text-xs sm:text-lg">
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
          <div className="h-[90%] w-full flex flex-col gap-2 sm:gap-4 pb-2 sm:pb-0">
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
          </div>
        </div>
        {/* doughnut chart */}
        <div className="h-full lg:w-2/5 flex flex-col gap-3 p-4 rounded-xl bg-white">
          <div className="h-full w-full">
            <div className="h-[10%] flex justify-between items-center  ">
              <h2 className="text-slate-700 font-normal text-xs sm:text-lg">
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

      {/* bar chart */}
      <div className="h-auto w-full p-4 rounded-xl bg-white mb-32 lg:mb-0">
        <div className="flex justify-between items-center">
          <h2 className="text-slate-700 font-normal text-xs sm:text-lg">
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
