import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";
import { data } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Barchart() {
  const { expenses, totalExpense, dailyTransactions } =
    useContext(TransactionContext);
  // const dailyTr = dailyTransactions
  // console.log("dttt",dailyTr);
  
  // const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      

  const monthlyExpense = expenses.reduce((mn, t) => {
    const month = t.date.slice(5, 10);
    // console.log('mn--',month);
    mn[month] = (mn[month] || 0) + t.amount;
    return mn;
  }, {});
  // console.log(monthlyExpense);
  const sortEx = Object.entries(monthlyExpense).sort((a, b) => b[1] - a[1]);
  const monthlyArr = sortEx.map(([date, total]) => ({
    date,
    total,
  }));
  console.log(monthlyArr);
  
  const labels = monthlyArr.map((d)=>d.date)
  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        // data: [90000, 110000, 100000, 130000, 120000, totalExpense],
        data: monthlyArr.map((e)=>e.total),
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
