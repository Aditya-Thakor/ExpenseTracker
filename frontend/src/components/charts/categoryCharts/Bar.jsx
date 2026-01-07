import React, { useContext, useEffect, useRef, useState } from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MonthlyExpenseBarChart() {
  const {monthlyExpense}= useContext(TransactionContext);
  const chartRef = useRef();
  const [gradient, setGradient] = useState(null);

  const expenses = [
    45000, 72000, 38000, 90000, 67000, 82000,
    50000, 76000, 39000, 95000, 68000, 87000
  ];

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

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly Expenses",
        // data: expenses,
        data:monthlyExpense.map(e=>e.total),
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
