import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import TransactionContext from "../../../context/TransactionContext";
import { useTransactions } from "../../../context/transactionContext/TransactionContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MonthlyExpenseBarChart() {
  const chartRef = useRef();
  const [gradient, setGradient] = useState(null);

  const {getMonthlyExSum,getSummary}=useTransactions();
  const {monthlyExpenseSummary} = getMonthlyExSum();

  let year = new Date().getFullYear()
  const monthlyExpenses=getSummary('yearly',year,'expense');
  const expenseTr  = monthlyExpenses?.transactions;

  const monthlySum = expenseTr?.reduce((mn,tr)=>{
      const month = tr.date.slice(0, 10);
        mn[month] = (mn[month] || 0) + tr.amount;
        return mn;
    },{});
    
    const sortEx = Object.entries(monthlySum? monthlySum: {});

    const mnExArr = sortEx?.map(([month, total]) => ({
      day: month.split("-")[2],
      month: month.split("-")[1],
      year: Number(month.split("-")[0]),
      total,
    }));

    const monthlyexSum= mnExArr.reduce((mn,t)=>{
      mn[t.month]= (mn[t.month] || 0) + t.total
      return mn;
    },[]);

    const MonthlyExpenses = Object.entries(monthlyexSum).map(([month,total])=>({
      month:month,
      total: total
    }));

    console.log("monthly expenses:: ");
    console.log(MonthlyExpenses);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;

    // Bar gradient (top → bottom)
    const g = ctx.createLinearGradient(0, 0, 0, 300);
    g.addColorStop(0, "#3B82F6");
    g.addColorStop(1, "#06B6D4");

    setGradient(g);
  }, []);


  const lbls = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const data = {
    // labels: lbls.slice(0,thisMnEx.length),
    // labels: lbls.slice(0,monthlyExpenseSummary.length),
    labels: lbls.slice(0,MonthlyExpenses.length),
    datasets: [
      {
        label: "Monthly Expenses",
        // data:thisMnEx.map(e=>e.total),
        // data:monthlyExpenseSummary.map(e=>e.total),
        data:MonthlyExpenses.map(e=>e.total),
        backgroundColor: gradient || "#3B82F6",
        borderRadius: 5,
        borderSkipped: false, 
        categoryPercentage: 1,
        barPercentage: 0.9, 
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value.toLocaleString(),
        },
        grid:{display:false}
      },
      x: {
        grid: { display: false }
      }
    }
  };

  return (
    <div className="h-full w-full max-w-6xl mx-auto p-6">
      <Bar ref={chartRef} data={data} options={options} className=" w-full h-full" />
    </div>
  );
}
