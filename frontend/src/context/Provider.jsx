import React, { useEffect, useMemo, useState } from "react";
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


  // ALL DATA:::::::
  const [allTransactions, setAllTransactions]= useState([]);
  const [allExpenses, setAllExpenses]=useState([]);
  const [allIncomes, setAllIncomes]=useState([]);

  // CURRENT YEAR DATA 
  const [thisYrTrans, setThisYrTrans]=useState([]);
  const [thisYrEX,setThisYrEx]=useState([]);
  const [thisYrIn,setThisYrIn]=useState([]);



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

    async function getTransactions(){
      if(!user) return console.log("User not found!!!!!");
      
      const altr= user?.transactions;
      // console.log("all trasactions");
      // console.log(altr);
      
      setAllTransactions(altr); //set all transactions...

      // All Incomes ::::
      const alin = altr.filter(t=>t.type=="income");
      // console.log("all incomes");
      // console.log(alin);
      setAllIncomes(alin);

      // All Expenses:::;
      const alex = altr.filter(t=>t.type=="expense");
      setAllExpenses(alex);
      }
    getTransactions()
  }, [userId,allTransactions]); 

  useMemo(()=>{
    if(user === null) return console.log("user not found!!");
    
    const today = new Date();
    const crYear= new Date(today.getFullYear(),0,1);
    const crMonth = new Date(today.getFullYear(),today.getMonth(),1);
    const week = today.getDate(-7);
    const yeasterDay = today.getDate(-1);

  },[allTransactions])

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
