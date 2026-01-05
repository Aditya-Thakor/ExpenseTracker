import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function InEx() {
  const {manualFilter,monthlyExpense,monthlyIncome, count}=useContext(TransactionContext)
  
  // const handleExpense = ()=>{
  //   let ex = monthlyExpense;
  //   // let dt= ex?.filter(e=>e.month)
  //   // console.log("exedxdex",monthlyExpense);
  // }
  // handleExpense();

  const labels =  ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const slice = labels.slice(labels.length-manualFilter, labels.length);
  // console.log("sliced data->", slice);
  
  
  const data = {
    // labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels:slice,
    datasets: [
      {
        label: "Income",
        // data: [0,0,0,0,0,0,80000, 50000, 30000, 70000, 60000, totalIncome],
        data:monthlyIncome?.map(i=>i.total) ,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Expense",
        // data: [0,0,0,0,0,0,90000, 38000, 21000, 60000, 58000, totalExpense],
        data:monthlyExpense?.map(e=>e.total) ,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="h-full w-full mx-auto p-4">
        <Line data={data} options={options} />
    </div>
  )
}
