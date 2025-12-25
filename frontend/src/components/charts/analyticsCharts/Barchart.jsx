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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Barchart() {
  const {expenses,totalExpense}=useContext(TransactionContext);
  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthlyExpense = expenses.reduce((mn,t)=>{
    const month= t.date.slice(0,7);
    // console.log('mn--',month);
    mn[month]= (mn[month] || 0)+t.amount;
    return mn;
  },{});
  console.log(monthlyExpense); // now how to add this?
  
  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: [90000, 110000, 100000, 130000, 120000, totalExpense],
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
      <Bar data={data} options={options}/>
    </div>
  );
}
