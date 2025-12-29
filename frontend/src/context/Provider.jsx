import React, { useEffect, useState } from "react";
import TransactionContext from "./TransactionContext";

const TransactionContextProvider = ({ childern }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser._id;
  const [user, setUser] = useState(null);

  const [transactions, setTransactions] = useState([]);
  const [recentTransactions, setRecentTrans] = useState([]);

  const [expenses, setExpenses]=useState([]);
  const [totalExpense, setTotalExpense]= useState(0);

  const [incomes,setIncomes]=useState([]);
  const [totalIncome,setTotalIncome]=useState(0);

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
    };
    getTransactions();
  }, [user, transactions]);

  return (
    <TransactionContext.Provider
      value={{ user, transactions, setTransactions, recentTransactions, expenses,totalExpense,incomes,totalIncome }}
    >
      {childern}
    </TransactionContext.Provider>
  );
};
export default TransactionContextProvider;
