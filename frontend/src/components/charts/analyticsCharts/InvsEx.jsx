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
  const {manualFilter,monthlyExpense,monthlyExpense1,monthlyIncome, monthlyIncome1}=useContext(TransactionContext)
  
  // const handleExpense = ()=>{
  //   let ex = monthlyExpense;
  //   // let dt= ex?.filter(e=>e.month)
  //   // console.log("exedxdex",monthlyExpense);
  // }
  // handleExpense();
  // console.log("manual filter,", manualFilter)
console.log("mnt main");
console.log(monthlyExpense);
  const labels =  ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const labels1=[];
  const data1=[];
  monthlyExpense.forEach(element => {
    console.log("eleexp",element);
    labels1.push(element.day + "-"+ element.month+"-" +element.year)
    data1.push(element.total);
  });
  const inData = [];
  monthlyIncome.forEach(e => {
    inData.push(e.amount)
  });
  console.log("innn",inData);
  

  console.log("lbl1",labels1);
  console.log("data1");
  console.log(data1);
  const slice = labels.slice(labels.length-manualFilter, labels.length);
  // console.log("sliced data->", slice);
  
  
  const data = {
    // labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels:slice, //lbl2,
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
        data:monthlyExpense?.map(e=>e.total),  //monthlyExpense?.map(e=>e.total) ,
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
