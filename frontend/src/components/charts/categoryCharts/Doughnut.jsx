import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseDoughnutChart() {

    const chartRef = useRef();
    const [gradient, setGredient] = useState([]);

    useEffect(()=>{
        const chart = chartRef.current;

        if(!chart) return;

        const ctx = chart.ctx;
        // gredients bg colors
        const bill = ctx.createLinearGradient(0,0,0,300);
        bill.addColorStop(0, "#A855F7");
        bill.addColorStop(1,"#EC4899");
        
        const trans = ctx.createLinearGradient(0,0,0,300);
        trans.addColorStop(0, "#3B82F6");
        trans.addColorStop(1,"#06B6D4");

        const food = ctx.createLinearGradient(0,0,300,0);
        food.addColorStop(0, "#F97316");
        food.addColorStop(1,"#F59E0B");

        const other = ctx.createLinearGradient(0,0,0,300);
        other.addColorStop(0, "#6B7280");
        other.addColorStop(1,"#64748B");

        setGredient([bill, trans, food, other])
        
    },[])

  const data = {
    labels: [
      "Bills & Utilities",
      "Transportation",
      "Food & Dining",
      "Others"
    ],
    datasets: [
      {
        data: [34000, 25000, 20000, 60000],
        // backgroundColor: ["#EC4899", "#3B82F6", "#F59E0B", "#6B7280"],
        backgroundColor: gradient.length? gradient : ["#EC4899", "#3B82F6", "#F59E0B", "#6B7280"] ,
        borderWidth: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  };

  return (
    <div className="w-full p-5 max-w-md mx-auto">
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
}
