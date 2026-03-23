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
import { useContext, useMemo, useState } from "react";
import TransactionContext from "../../../context/TransactionContext";
import { useTransactions } from "../../../context/transactionContext/TransactionContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function InEx({ durationFilter, yearCount }) {
  const { getMonthlyTrends } = useTransactions();
  
  // Line chart demands daily granularity for 'currentMonth' instead of default weekly bars.
  const groupTypeOverride = durationFilter === 'currentMonth' ? 'daily' : null;
  const { monthlyExpenseSummary, monthlyIncomeSummary } = getMonthlyTrends(durationFilter, yearCount, groupTypeOverride);

  // Merge unique keys across both expenses and incomes correctly.
  const allKeys = new Set();
  monthlyExpenseSummary.forEach(e => allKeys.add(e.key));
  monthlyIncomeSummary.forEach(i => allKeys.add(i.key));
  
  const sortedKeys = Array.from(allKeys).sort();
  
  const labels = sortedKeys.map(k => {
    const found = monthlyExpenseSummary.find(e => e.key === k) || monthlyIncomeSummary.find(i => i.key === k);
    return found ? found.label : k;
  });

  const expenseData = sortedKeys.map(m => {
    const found = monthlyExpenseSummary.find(e => e.key === m);
    return found ? found.total : 0;
  });

  const incomeData = sortedKeys.map(m => {
    const found = monthlyIncomeSummary.find(i => i.key === m);
    return found ? found.total : 0;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Expense",
        data: expenseData,
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
