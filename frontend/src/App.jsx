import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TransactionContextProvider from "./context/Provider";
import TransactionContext from "./context/TransactionContext";
import { useEffect, useState } from "react";

function App() {
  const etusername = "Aditya";
  const other = "Thakor";

  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser._id;
  const [user, setUser] = useState(null);

  const [transactions, setTransactions] = useState([]);
  const [recentTransactions, setRecentTrans] = useState([]);

  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const [categories,setCategories]=useState([])

  useEffect(() => {
    async function fetchUser() {
      await fetch("http://localhost:5000/usersdata/")
        .then((res) => res.json())
        .then((data) => {
          let usr = data.find((i) => i._id === userId);
          console.log("usr-", usr);
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
    console.log("user updated!!!", user);
    if (user === null) return;

    const getTransactions = () => {
      const tr = user?.transactions;
      setTransactions(tr);

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
      const sortCate = Object.entries(ct)
        .sort((a, b) => b[1] - a[1]);

      // console.log("srt--",sortCate);
      const topcate = sortCate.map(([category, total]) => ({
        category,
        total,
      }));
      setCategories(topcate)

    };
    getTransactions();
  }, [user, transactions]);

  return (
    <TransactionContext.Provider
      value={{
        n: etusername,
        o: other, 
        user:user,

        transactions: transactions,
        setTransactions: setTransactions,
        recentTransactions: recentTransactions,
        setRecentTrans:setRecentTrans,

        expenses: expenses,
        setExpenses:setExpenses,
        totalExpense: totalExpense,
        setTotalExpense:setTotalExpense,

        incomes: incomes,
        setIncomes: setIncomes,
        totalIncome:totalIncome,
        setTotalIncome: setTotalIncome,

        categories
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
