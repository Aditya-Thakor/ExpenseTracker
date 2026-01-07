import { FileSearchCorner, MoveRight } from "lucide-react";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import TransactionContext from "../../context/TransactionContext";
import { useContext, useEffect, useState } from "react";

export default function Report() {  
    const usr=JSON.parse(localStorage.getItem("user")) ;
    const uid = usr._id
    // console.log("UID-",uid);
    const [user,setUser]=useState(null);
    const [tr,setTr]=useState([]);  

useEffect(()=>{
 fetch("http://localhost:5000/usersdata/")
        .then((res) => res.json())
        .then((data) => {
          let usr = data.find((i) => i._id === uid);
          // console.log("usr-", usr);
          setUser(usr);
        })
        .catch((error) => {
          console.log("error at fetching userdata at dashboard", error);
        });
},[uid])
    
  const transactions = [
    {
      id: 1,
      type: "income",
      tag: "Monthly Salary",
      category: "Salary",
      amount: 50000,
      date: "2026-01-01",
    },
    {
      id: 2,
      type: "expense",
      tag: "House Rent",
      category: "Rent",
      amount: 12000,
      date: "2026-01-02",
    },
    {
      id: 3,
      type: "expense",
      tag: "Grocery Shopping",
      category: "Groceries",
      amount: 3500,
      date: "2026-01-03",
    },
    {
      id: 4,
      type: "income",
      tag: "Client Project",
      category: "Freelance",
      amount: 8000,
      date: "2026-01-05",
    },
    {
      id: 5,
      type: "expense",
      tag: "Power Bill",
      category: "Electricity Bill",
      amount: 1800,
      date: "2026-01-06",
    },
    {
      id: 6,
      type: "expense",
      tag: "WiFi Recharge",
      category: "Internet",
      amount: 1200,
      date: "2026-01-07",
    },
    {
      id: 7,
      type: "income",
      tag: "Year-End Bonus",
      category: "Bonus",
      amount: 5000,
      date: "2026-01-10",
    },
    {
      id: 8,
      type: "expense",
      tag: "Daily Commute",
      category: "Transport",
      amount: 900,
      date: "2026-01-11",
    },
    {
      id: 9,
      type: "expense",
      tag: "Movie Night",
      category: "Entertainment",
      amount: 2500,
      date: "2026-01-13",
    },
    {
      id: 10,
      type: "income",
      tag: "Stock Profit",
      category: "Investment Return",
      amount: 3000,
      date: "2026-01-15",
    },
  ];
  
    const th=[ "Date","Title","Class","Expense","Income" ]
  return (
    <div className="h-auto lg:h-screen w-full flex flex-col items-center px-10 gap-10 bg-gradient-to-b from-blue-200  to-cyan-50 ">
      <div className="lg:h-32 w-full flex justify-center items-center gap-3 bg-white text-neutral-600 lg:mt-3 rounded-xl shadow-sm px-4">
        <label htmlFor="fromDate" className=" border px-5 py-3 rounded-lg ">
          <span className="font-semibold">From : </span>
          <input
            id="fromDate"
            type="date"
            className="ml-2 text-cyan-600 font-medium focus:outline-none"
          />
        </label>
        <span>
          <MoveRight />
        </span>
        <label htmlFor="fromDate" className=" border px-5 py-3 rounded-lg">
          <span className="font-semibold">To : </span>
          <input
            id="fromDate"
            type="date"
            className="ml-2 text-cyan-600 font-medium focus:outline-none"
          />
        </label>
        <span className="w-16 py-2 rounded-lg flex justify-center items-center cursor-pointer text-white/50 bg-gradient-to-l from-blue-500/50 to-cyan-500/50 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all ease-in-out  ">
          <FileSearchCorner className="size-8" />
        </span>
      </div>
      <div className="h-auto w-full flex flex-col gap-3 ">
        <table className="">
          <thead className="mb-4">
            <tr className="border-b-2 border-white">
                {
                    th.map((t,ind)=>(
                        <th key={ind} className="text-start text-lg text-neutral-700">{t}</th>
                    ))
                } 
            </tr>
          </thead>
          <tbody className="">
            {transactions?.map((item) => (
              <tr key={item.id} className="text-sm text-neutral-600">
                <td>{item.date}</td>
                <td>{item.tag}</td>
                <td>{item.category}</td>
                <td>{item.type=="expense"?item.amount:0}</td>
                <td>{item.type=="income"?item.amount:0}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-auto max-w-xs bg-white text-neutral-800 font-lato p-5">
            <h3 className="font-semibold text-xl mb-3">Summery</h3>
            <div className="h-full w-full flex flex-col   text-sm"> 
                <div className="flex items-center justify-between">
                    <span>Total Income :- </span>
                    <span className="text-xl">Rs. 15151</span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-neutral-700 ">
                    <span>Total Expense :- </span>
                    <span className="text-xl">Rs. 15151</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Net Balance :- </span>
                    <span className="text-xl">Rs. 15151</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
