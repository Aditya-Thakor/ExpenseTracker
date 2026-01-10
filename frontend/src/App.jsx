import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TransactionContextProvider from "./context/Provider";
import TransactionContext from "./context/TransactionContext";
import { useEffect, useMemo, useState } from "react";

function App() {
  const etusername = "Aditya";
  const other = "Thakor";
  var td = new Date();
  const [count, setCount] = useState(td.getFullYear());

  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser._id;
  const [user, setUser] = useState(null);

  const [transactions, setTransactions] = useState([]);
  const [recentTransactions, setRecentTrans] = useState([]);
  const [thisYrTrans,setThisYrTrans]=useState([]);

  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [crExpenses,setCrExpenses]= useState([]);
  const [crTotalEx,setCrTotalEx]= useState(0);

  const [currentMnEx,setCurrentMnEX]= useState([]);
  const [currentMnExTotal,setCurrentMnEXTotal]=useState(0);
  const [currentMnIn,setCurrentMnIn]= useState([]);
  const [currentMnInTotal,setCurrentMnInTotal]= useState(0);


  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [crIncomes,setCrIncomes]=useState([]);
  const [crTotalIn,setCrTotalIn]= useState(0);

  const [categories, setCategories] = useState([]);
  const [crntMnCate, setCrntMnCate] = useState([]);

  const [dailyTransactions, setDailyTr] = useState([]);
  const [monthlyExpense, setMonthlyExpense] = useState([]);
  const [monthlyExpense1, setMonthlyExpense1] = useState([]);
  const [monthlyIncome, setMonthlyIncome] = useState([]);
  const [monthlyIncome1, setMonthlyIncome1] = useState([]);

  const [manualFilter, setManualFilter] = useState(12);

  // LAST MONTH'S DATA
  const [lastMnTrans,setLastMnTrans]=useState([]);
  const [lastMnEx,setLastMnEx]= useState([]);
  const [lastMnExTotal,setLastMnExTotal]=useState(0);
  const [lastMnIn,setLastMnIn]=useState([]);
  const [lastMnInTotal,setLastMnInTotal]=useState(0);

  useEffect(() => {
    async function fetchUser() {
      await fetch("http://localhost:5000/usersdata/")
        .then((res) => res.json())
        .then((data) => {
          let usr = data.find((i) => i._id === userId);
          // console.log("usr-", usr);
          setUser(usr);
        })
        .catch((error) => {
          console.log("error at fetching userdata at dashboard", error);
        });
    }
    fetchUser();
  }, [userId]);
  // console.log(user);

  useEffect(() => {
    // console.log("user updated!!!", user);
    if (user === null) return;

    const getTransactions = () => {
      const tr = user?.transactions;
      setTransactions(tr);

      if (!transactions) return;
      const recentT = [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setRecentTrans(recentT);

      const ex = recentT.filter((e) => e.type === "expense");
      // console.log("ex-",ex);
      setExpenses(ex);
      // console.log(expenses);
      const inc = recentT.filter((i) => i.type === "income");
      // console.log(inc);
      setIncomes(inc);

      const tl = ex.reduce((sum, num) => {
        return sum + Number(num.amount);
      }, 0);
      // console.log('total-',tl);
      setTotalExpense(tl);

      const tIn = inc.reduce((sum, num) => {
        return sum + Number(num.amount);
      }, 0);
      // console.log(tIn);
      setTotalIncome(tIn);

      
      //--filtering this month 
      const today = new Date();
      const thisMonth = new Date(today.getFullYear(),today.getMonth(),1);
      // console.log("this month");
      // console.log(thisMonth); // give first date of current month

      //TRANSACTIONS:::::::::::::::

      //this month transactions:
      const thisMnTransactions = transactions.filter((t)=>new Date(t.date)>=thisMonth && new Date(t.date) <= today);
      // console.log("this month transactions::::");
      // console.log(thisMnTransactions); // gives this month transaction!!!!

      //this year transactions::
      const year = new Date(today.getFullYear(),0,1);
      // console.log("cr yr date--", year);
      
      const thisYearTrans= transactions.filter((t)=>new Date(t.date)>=year && new Date(t.date)<=today);
      // console.log("This year transactions---");
      // console.log(thisYearTrans);
      setThisYrTrans(thisYearTrans);

      // CURRENT YEAR'S INCOMES:
      const crin= thisYearTrans.filter((ex)=>ex.type=="income");
      setCrIncomes(crin);
      
      // CURRENT YEAR'S EXPENSES:
      const crex= thisYearTrans.filter((ex)=>ex.type=="expense");
      // console.log("this year expenses");
      // console.log(crex);
      setCrExpenses(crex);

      

      // INCOMES::::::::::
      const thisMonthIncomes = incomes.filter((t)=>new Date(t.date)>=thisMonth && new Date(t.date) <= today);
      // console.log("This Month Expenses");
      // console.log(thisMonthExpenses); // gives current month expenses:::
      setCurrentMnIn(thisMonthIncomes);

      const crTotalIn = thisMonthIncomes.reduce((mnTotal,num)=>{return mnTotal + num.amount},0)
      setCurrentMnInTotal(crTotalIn);
      // console.log("this month ex total");
      // console.log(crTotalEx);

      // EXPENSES::::::::::
      const thisMonthExpenses = expenses.filter((t)=>new Date(t.date)>=thisMonth && new Date(t.date) <= today);
      // console.log("This Month Expenses");
      // console.log(thisMonthExpenses); // gives current month expenses:::
      setCurrentMnEX(thisMonthExpenses);

      const crTotalEx = thisMonthExpenses.reduce((mnTotal,num)=>{return mnTotal + num.amount},0)
      setCurrentMnEXTotal(crTotalEx);
      // console.log("this month ex total");
      // console.log(crTotalEx);
      
      
      // SORTTING CATEGORIES (this Month)::::
      const thisMnCate = currentMnEx?.reduce((cate,ex)=>{
        cate[ex.category]= (cate[ex.category] || 0) + ex.amount;
        return cate;
      },{});
      // console.log("this month cate-");
      // console.log(thisMnCate); // category vise ex of current month...
      
      setCrntMnCate(thisMnCate);

      // SORTING CATEGORIES (overall):::
      const ct = expenses.reduce((cate, ex) => {
        cate[ex.category] = (cate[ex.category] || 0) + ex.amount;
        return cate;
      }, {});
      // console.log("ct--",ct);

      const sortCate = Object.entries(ct).sort((a, b) => b[1] - a[1]);

      // console.log("srt--",sortCate);
      const topcate = sortCate.map(([category, total]) => ({
        category,
        total,
      }));
      setCategories(topcate);

      //date filtering
      const dt = transactions.reduce((date, tr) => {
        date[tr.date] = (date[tr.date] || 0) + tr.amount;
        return date;
      }, {});
      // console.log("date--",dt); // logs a obj

      const sortDate = Object.entries(dt).sort((a, b) => b[1] - a[1]);
      //  console.log("srtDate---",sortDate);  // logs [[arr],[arr],...]

      const DateArr = sortDate.map(([date, total]) => ({
        date,
        total,
      }));
      // console.log("datearrr---",DateArr); // logs [{obj},{obj},...]
      setDailyTr(DateArr);
    };

    // YEARLY EXPENSES:::
    const yearlyExpense = expenses.reduce((mn, t) => {
      const ym = t.date.slice(0, 7);
      mn[ym] = (mn[ym] || 0) + t.amount;
      return mn;
    }, {});
    // console.log("yrrrr",yearlyExpense);

    let m = new Date().setMonth(-1);
    // console.log(new Date(m));
    let y= new Date().setFullYear(count) ;
    // console.log(new Date(y));
    

    getTransactions();
  }, [user, transactions,count]);

  useMemo(() => {
    // SORTTING EXPENSES
    const monthlyExpense = expenses.reduce((mn, t) => {
      const month = t.date.slice(0, 10);
      // console.log('mn--',month);
      mn[month] = (mn[month] || 0) + t.amount;
      return mn;
    }, {});

    const monthlyExpense1 = expenses.reduce((mn, t) => {
      const month = t.date.slice(0, 10);
      // console.log('mn--',month);
      mn[month] = t.amount;
      return mn;
    }, {});
    //  console.log(expenses);
    const sortEx = Object.entries(monthlyExpense).sort(); //.sort((a, b) => a[1] - b[1]);
    // console.log("srtEX--",sortEx);

    const monthlyArr = sortEx.map(([month, total]) => ({
      day: month.split("-")[2],
      month: month.split("-")[1],
      year: Number(month.split("-")[0]),
      total,
    }));
    var td = new Date();
    var bm = new Date().setMonth(-1);
    // console.log("bmm",new Date(bm)); // gives c year -1 (d/m/y) 
    var by = new Date().setFullYear(count);
    // console.log("byyy",new Date(by)); // gives current year (d/m/y) 

    // WEEK VISE
    var wk = new Date().getDate(-7);
    // console.log("wkkk-",new Date(wk));
    

    let data2 = expenses
    .filter((y) => new Date(y.date) >= new Date(bm))  // gives correct data (18 datas) of 2026 and 24,25 are blank!!
    .filter((t) => new Date(t.date) <= new Date(by)) // gives 41 datas
    // .filter((y) => new Date(y.date) <= new Date(bm)) // gives data (23datas)  and 2024 is blank
    // .filter((x)=> new Date(x.date)!=new Date(bm))
    //  console.log("data22", data2)

    const data3= expenses.filter((d)=>new Date(d.date) >= new Date(bm) && new Date(d.date) < new Date(by))
    // console.log("data-3:",data3);
    
    var data1 = expenses.filter((t) => new Date(t.date) >= new Date(bm));
    // console.log("data111",data1);

    const mnthlyArr1 = data2.map((e) => ({
      day: new Date(e.date).getDate(),
      month: e.date.split("-")[1],
      year: Number(e.date.split("-")[0]),
      amount: e.amount,
    }));
    // console.log("monthlyArr1",mnthlyArr1);
    // console.log("monthlyARR",monthlyArr);
    setMonthlyExpense1(mnthlyArr1); // logs=> {day,month,year,total}
    var ma = monthlyArr.filter((t) => t.year == count);
    setMonthlyExpense(ma);
    // console.log("month = ",count);
    // console.log(ma);

    // CURRENT YEAR EXPENSE TOTAL
    const cryrTotal = ma.reduce((sum,t)=>{
      return sum + t.total
    },0)
    // console.log("currentYear Total-", cryrTotal);
    setCrTotalEx(cryrTotal);
    


    // SORTTING INCOMES
    const monthlyIncome = incomes.reduce((mn, t) => {
      const month = t.date.slice(0, 10);
      mn[month] = (mn[month] || 0) + t.amount;
      return mn;
    }, {});
    // console.log("ininin",monthlyIncome);

    const sortIn = Object.entries(monthlyIncome).sort();
    const mnIn = sortIn.map(([month, total]) => ({
      day:month.split("-")[2],
      month: month.split("-")[1],
      year: Number(month.split("-")[0]),
      total,
    }));
    let In = mnIn.filter((t) => t.year == count);
    // console.log("monthly Innnn",In); 
    setMonthlyIncome(In);
    
    const cryrTotalIn = In.reduce((sum,t)=>{
      return sum + t.total
    },0)
    // console.log("currenctYear total Income- ", cryrTotalIn);
    setCrTotalIn(cryrTotalIn);
    

    const monthlyIncome1 = incomes.reduce((mn, t) => {
      const month = t.date.slice(0, 10);
      mn[month] = t.amount;
      return mn;
    }, {});

    let incomeData = incomes.filter((t) => new Date(t.date) >= new Date(bm));

    const mnthlyIn = incomeData.map((e)=>({
      day: new Date(e.date).getDate(),
      month: e.date.split("-")[1],
      year: Number(e.date.split("-")[0]),
      amount: e.amount,
    }))
    setMonthlyIncome1(mnthlyIn);

    // SORTTING CATEGORIES TOTAL
    // console.log(monthlyExpense);
    
    //    const ct = expenses.reduce((cate, ex) => {
        
    //     cate[ex.category] = (cate[ex.category] || 0) + ex.amount;
    //     return cate; 
    //   }, {});
    //   console.log("ctctcc", ct);
      


    // const ct = expenses.reduce((yr, ex) => {
    //   const date = ex.date.slice(0, 4);

    //   yr[date] = (yr[date] || 0) + ex.category;
    //   return yr;
    // }, {});
    // console.log("yrr7ct",ct); // log 2025:'a single str of categories',2024:'a single str of categories'



    // LAST MONTH'S TRANSACTIONS::;
    const today= new Date();
    const fstDay = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );
    const lstDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
      23, 59, 59, 999
    ) 
    // ALL TRANS..
    const lastMnTransactions = transactions.filter((t)=>new Date(t.date)>=fstDay && new Date(t.date)<=lstDay);

    // console.log("last month's transactions");
    // console.log(lastMnTransactions);
    setLastMnTrans(lastMnTransactions);

    // ALL EX:::
      const lstEx=lastMnTransactions.filter(t=>t.type=="expense");
      setLastMnEx(lstEx);
      const lsext = lstEx.reduce((sum,num)=>{return sum +num.amount},0)
      setLastMnExTotal(lsext);
      // console.log("Ls Exs::-",lastMnEx);
      // console.log("Ls Exs total::-",lastMnExTotal);
      
    // ALL IN:::
      const lstIn=lastMnTransactions.filter(t=>t.type=="income");
      setLastMnIn(lstIn);
      const lsint = lstIn.reduce((sum,num)=>{return sum +num.amount},0)
      setLastMnInTotal(lsint); 
      // console.log("Ls Ins::-",lastMnIn );
      // console.log("Ls Ins total::-",lastMnInTotal);
    
    

  }, [transactions,expenses, incomes, count, manualFilter,crntMnCate]);

  return (
    <TransactionContext.Provider
      value={{
        n: etusername,
        o: other,
        user: user,
        count,
        setCount,
        manualFilter,
        setManualFilter,

        transactions,
        setTransactions: setTransactions,
        recentTransactions: recentTransactions,
        setRecentTrans: setRecentTrans,
        lastMnTrans, 
        thisYrTrans,

        expenses: expenses,
        currentMnEx,
        crExpenses,currentMnExTotal,
        crTotalEx,
        lastMnExTotal,
        setExpenses: setExpenses,
        totalExpense: totalExpense,
        setTotalExpense: setTotalExpense,

        incomes: incomes,
        setIncomes: setIncomes,
        totalIncome: totalIncome,currentMnInTotal,
        setTotalIncome: setTotalIncome,crIncomes,lastMnInTotal,
        crTotalIn,

        categories,
        crntMnCate,
        dailyTransactions,
        monthlyExpense,
        monthlyIncome,
        monthlyExpense1,
        monthlyIncome1
      }}
    >
      <div className="flex bg-[#F5F8FF]">
        <Navbar />
        <Outlet />
      </div>
    </TransactionContext.Provider>
  );
}

export default App;
