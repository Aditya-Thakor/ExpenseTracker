import { Download, FileSearchCorner, MoveRight, RotateCw } from "lucide-react";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import TransactionContext from "../../context/TransactionContext";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Report() {
  const user = JSON.parse(localStorage.getItem('user'));
  const uid =  user._id;
  // console.log("user-",uid);

  const { transactions, totalExpense, totalIncome } =
    useContext(TransactionContext);
  const [tr, setTr] = useState([]);
  const [exTotal, setExTotal] = useState(0);
  const [inTotal, setInTotal] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [instruction, setInstruction] = useState(true);
  const [noData, setNoData] = useState(false);

  const handleStatement = async() => {
    if (!from && !to) return setInstruction(true);
    if (from > to && to.length != 0) return setTr([]) || setNoData(true); //setNoData(true) || setInstruction(false)
    // console.log(from,"->",to);
    if (from && !to) {
      setInstruction(false);
      setTr([]);
      const statement = transactions.filter(
        (t) =>
          new Date(t.date) <= new Date() && new Date(t.date) >= new Date(from)
      );
      let t = new Date();
      setTo(t)
      // console.log("statement");
      // console.log(statement.filter((t)=>t.type=="expense"));
      if (statement.length === 0) {
        setNoData(true);
        return;
      }
      setNoData(false);
      return setTr(statement);
    }
    if (!from && to) {
      setInstruction(false);
      setTr([]); 
      // setFrom(t);
      // console.log("fd-",from);
      
      const statement = transactions.filter(
        (t) => new Date(t.date) <= new Date(to)
      );
     
      // console.log(statement);
      if (statement.length === 0) {
        setNoData(true);
        return;
      }
      setNoData(false);      
      return setTr(statement);
    }
    if (from && to) {
      setInstruction(false);
      setTr([]);
      const statement = transactions.filter(
        (t) =>
          new Date(t.date) <= new Date(to) && new Date(t.date) >= new Date(from)
      );
      // console.log("statement");
      // console.log(statement.filter((t)=>t.type=="income"));
      if (statement.length === 0) {
        setNoData(true);
        return;
      }
      setNoData(false);
      return setTr(statement);
    }
  };

  useMemo(() => {
    const ext = tr
      ?.filter((t) => t.type == "expense")
      .reduce((sum, t) => {
        return sum + t.amount;
      }, 0);
    setExTotal(ext);
    const int = tr
      ?.filter((t) => t.type == "income")
      .reduce((sum, t) => {
        return sum + t.amount;
      }, 0);
    setInTotal(int);
    // console.log("extt-",ext);
  }, [tr, from, to]);

  /* SEND TRANSACTIONS */
  const sendTr = async()=>{
    if (tr.length>0) {
      // console.log("sorted Transactions :")
      // console.log(tr)  
      const formdata = new FormData();
      formdata.append("userid", uid);
      formdata.append("from", from);
      formdata.append("to", to);
         

      const r =  await fetch("http://localhost:5000/analytics/report/export-report",{
        method:"post",
        body: formdata
      })
      console.log(await r.text());  
    }
    //  if(tr.length>0){
    //  const r =  await fetch("http://localhost:5000/analytics/report/export-report",{
    //     method:"post",
    //     body: tr
    //   })
    //   console.log(await r.text()); 
    // }
  } 

  // console.log("from", from); // yyyy-mm-dd

  const th = ["Date", "Title", "Class", "Expense", "Income"];
  return (
    <div
      className={`${
        tr.length ? "h-auto" : "h-screen"
      }  w-full flex flex-col items-center relative px-10 gap-10 bg-gradient-to-b from-blue-200  to-cyan-50 `}
    >
      {/* HEADER SECTION */}
      <div className="h-auto sm:h-16 lg:h-28 w-full flex flex-col sm:flex-row justify-center items-center sm:gap-3 gap-2 bg-white text-neutral-600 lg:mt-3 rounded-xl shadow-sm px-4 py-3 sm:py-0"> 

        <label htmlFor="fromDate" className="w-full sm:w-auto flex items-center text-sm lg:text-base border px-5 py-1 lg:py-3 rounded-lg ">
          <span className="font-semibold text-nowrap">From : </span>
          <input
            id="fromDate"
            type="date"
            className="w-full sm:w-auto ml-2 text-cyan-600 font-medium focus:outline-none"
            onChange={(e) => setFrom(e.target.value)}
          />
        </label>
        <span>
          <MoveRight className="size-4 rotate-90 sm:rotate-0 sm:size-6" />
        </span>
        <label htmlFor="toDate" className="w-full sm:w-auto flex items-center text-sm lg:text-base border px-5 py-1 lg:py-3 rounded-lg">
          <span className="font-semibold text-nowrap">To : </span>
          <input
            id="toDate"
            type="date"
            className="w-full sm:w-auto ml-2 text-cyan-600 font-medium focus:outline-none"
            onChange={(e) => setTo(e.target.value)}
          />
        </label>
        <span
          className="w-full sm:w-11 lg:w-16 py-2 rounded-lg flex justify-center items-center cursor-pointer text-white sm:text-white/50 bg-gradient-to-l from-blue-500/50 to-cyan-500/50 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all ease-in-out  "
          onClick={handleStatement}
        >
          <FileSearchCorner className="size-4 lg:size-8" />
          <span className="sm:hidden text-sm ml-2">Search Transaction Data</span>
        </span>
       
       <div className="w-full sm:w-auto flex items-center justify-between gap-3">

        {tr.length? <span className="text-neutral-400 hover:text-neutral-700 hover:transform hover:rotate-180 transition-all ease-linear duration-500 cursor-pointer ">
          <RotateCw
             onClick={() => window.location.reload()} 
             className="size-4 lg:size-6"
          />
        </span>:'' }
        
        {tr.length ? (
          <button 
            className="flex items-center lg:absolute right-16 h-min text-gray-500 bg-blue-200  rounded-lg py-1.5 lg:py-3 px-3 lg:px-5 gap-2 shadow-sm hover:text-gray-900  hover:shadow-lg"
            onClick={sendTr}
          >
            <span className="">
              <Download className="size-3 lg:size-5" />
            </span>
            <span className="text-[10px] lg:text-sm text-nowrap ">Export report</span>
          </button>
        ) : (
          ""
        )}
         </div>
      </div>
      
      {/* DATA SECTION */}
      <div
        className={`min-h-[calc(100vh-10.5rem)] w-full  flex-col gap-20 ${
          tr.length ? "flex" : "hidden"
        } `}
      >

        {/* DATA TABLE */}
        <table className="">
          <thead className="mb-4">
            <tr className="border-b-2 border-white">
              {th.map((t, ind) => (
                <th key={ind} className="text-start text-xs sm:text-lg text-neutral-700">
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`h-auto overflow-y-scroll `}>
            {tr?.map((t) => (
              <tr key={t._id} className="text-[10px] sm:text-sm text-neutral-600">
                <td>{t.date.slice(0, 10)}</td>
                <td>{t.description}</td>
                <td>{t.type == "expense" ? t.category : t.incomeFrom}</td>
                <td>{t.type == "expense" ? t.amount : 0}</td>
                <td>{t.type == "income" ? t.amount : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SUMMERY CARD */}
        <div className="h-auto w-full  sm:max-w-lg sm:w-1/2 ml-auto bg-white text-neutral-800 font-lato p-5 mb-10 border border-dashed border-blue-300 shadow-lg">
          <h3 className="font-semibold text-lg sm:text-xl mb-3">Summery</h3>
          <div className="h-full w-full flex flex-col  text-xs sm:text-sm">
            <div className="flex items-center justify-between">
              <span>Total Income :- </span>
              <span className="text-base sm:text-xl">Rs. {inTotal}</span>
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-neutral-700 ">
              <span>Total Expense :- </span>
              <span className="text-base sm:text-xl">Rs. {exTotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Net Balance :- </span>
              <span className="text-base sm:text-xl">Rs. {inTotal - exTotal}</span>
            </div>
          </div>
        </div>
      </div>

{/* ERROR HANDLERS */}
      {instruction == true ? (
        <div className="h-auto w-3/4 text-center text-xl font-lato ">
          <h1 className="animate-pulse text-neutral-700">
            Select a date<span className="text-xs">(s)</span> to view your
            transactions.
          </h1>
        </div>
      ) : (
        ""
      )}
      {noData ? (
        <div className="h-auto sm:h-40 w-full sm:w-1/2 py-3 sm:py-0 px-4 sm:px-0 flex justify-center items-center text-neutral-600 text-center sm:text-xl font-lato bg-white/40 rounded-xl shadow-sm shadow-slate-400/50 ">
          <h1>No transactions found. Try selecting a different date.</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
