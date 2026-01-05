import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../../context/TransactionContext";
import { data } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Barchart() {
  const { expenses, monthlyExpense, manualFilter } =
    useContext(TransactionContext);

  const [mnEx,setMnEx]=useState([]);
  const [monthlyEx, setMonthlyEx] = useState([]);
  // const dailyTr = dailyTransactions
  // console.log("dttt",dailyTr);
  // const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // useEffect(() => {
  //   const monthlyExpense = expenses.reduce((mn, t) => {
  //     const month = t.date.slice(5, 7);
  //     // console.log('mn--',month);
  //     mn[month] = (mn[month] || 0) + t.amount;
  //     return mn;
  //   }, {});
  //   // setMnEx(monthlyExpense);
  //   // console.log(monthlyExpense);
  //   const sortEx = Object.entries(monthlyExpense).sort() //.sort((a, b) => a[1] - b[1]);
  //   // console.log("srtexe",sortEx); 
    
  //   const monthlyArr = sortEx.map(([month, total]) => ({
  //     month:Number(month) ,
  //     total,
  //   }));
  //   // console.log(monthlyArr);
  //   setMnEx(monthlyArr)
  // }, [expenses]);

  

  // const labels = mnEx.map((d) => d.month);
  const labels = ["Jan", "Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  // const labels =  ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const slice = labels.slice(labels.length-manualFilter, labels.length);
  
  const data = {
    labels:slice,
    datasets: [
      {
        label: "Expense",
        // data: [90000, 110000, 100000, 130000, 120000, totalExpense],
        data: monthlyExpense.map((e) => e.total),
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        borderColor: "red",
        borderWidth: 1,
      },
    ],
    backgroundColor: "rgba(0, 128, 0, 0.3)",
    borderColor: "green",
    borderWidth: 1,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="h-full w-full ">
      <Bar data={data} options={options} />
    </div>
  );
}
