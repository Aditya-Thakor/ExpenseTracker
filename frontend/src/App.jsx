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

  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const [categories, setCategories] = useState([]);
  const [dailyTransactions, setDailyTr] = useState([]);
  const [monthlyExpense, setMonthlyExpense] = useState([]);
  const [monthlyIncome, setMonthlyIncome] = useState([]);

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

      if(!transactions) return;
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

    getTransactions();
  }, [user, transactions]); 

  useMemo(() => {
    // SORTTING EXPENSES
    const monthlyExpense = expenses.reduce((mn, t) => {
      const month = t.date.slice(0, 7);
      // console.log('mn--',month);
      mn[month] = (mn[month] || 0) + t.amount;
      return mn;
    }, {});
    // console.log(monthlyExpense);
    const sortEx = Object.entries(monthlyExpense).sort(); //.sort((a, b) => a[1] - b[1]);
    const monthlyArr = sortEx.map(([month, total]) => ({
      month: month.split("-")[1],
      year: Number(month.split("-")[0]),
      total,
    }));
    // console.log("graph chart")
    var ma = monthlyArr.filter((t) => t.year == count);
    setMonthlyExpense(ma);

    // SORTTING INCOMES
    const monthlyIncome = incomes.reduce((mn, t) => {
      const month = t.date.slice(0, 7);
      mn[month] = (mn[month] || 0) + t.amount;
      return mn;
    }, {});
    // console.log("ininin",monthlyIncome);
    const sortIn = Object.entries(monthlyIncome).sort();
    const mnIn = sortIn.map(([month, total]) => ({
      month: month.split("-")[1],
      year: Number(month.split("-")[0]),
      total,
    }));
    let In = mnIn.filter((t) => t.year == count);
    setMonthlyIncome(In);

    // SORTTING CATEGORIES
    
    // const ct = expenses.reduce((yr, ex) => {
    //   const date = ex.date.slice(0, 4);

    //   yr[date] = (yr[date] || 0) + ex.category;
    //   return yr;
    // }, {});
    // console.log("yrr7ct",ct); // log 2025:'a single str of categories',2024:'a single str of categories'
    
  }, [expenses, incomes, count]);

  return (
    <TransactionContext.Provider
      value={{
        n: etusername,
        o: other,
        user: user,
        count,
        setCount,

        transactions: transactions,
        setTransactions: setTransactions,
        recentTransactions: recentTransactions,
        setRecentTrans: setRecentTrans,

        expenses: expenses,
        setExpenses: setExpenses,
        totalExpense: totalExpense,
        setTotalExpense: setTotalExpense,

        incomes: incomes,
        setIncomes: setIncomes,
        totalIncome: totalIncome,
        setTotalIncome: setTotalIncome,

        categories,
        dailyTransactions,
        monthlyExpense,
        monthlyIncome,
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
