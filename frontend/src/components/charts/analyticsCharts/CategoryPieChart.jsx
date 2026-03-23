import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";
import { useTransactions } from "../../../context/transactionContext/TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart({ durationFilter, yearCount }) {
  const {getCategories, getSummary} = useTransactions();

  const {allCategories} = getCategories(durationFilter, yearCount);
  const {totalIncome, totalExpense}=getSummary(durationFilter, yearCount);

  console.log("cate------");
  console.log(allCategories);
  
  // console.log("cate=-", categories);

  // const categories = {
  //   "bills & utilities": 600,
  //   "food & dining": 800,
  //   "travel": 400,
  //   "transportation": 300,
  //   "education": 500,
  //   "healthcare": 450,
  //   "entertainment": 350,
  //   "shopping": 600,
  // };

  // const labels = Object.keys(categories);
  // const labels = categories.map((c) => c.category);
  const labels = allCategories.map((c) => c.category);
  // console.log("lbls---",labels);

  // const values = Object.values(categories).map((v) =>
  //   ((v / income) * 100).toFixed(2)
  // );
  // const values = categories.map((v) =>
  const values = allCategories.map((v) =>
    // ((v.total / totalIncome) * 100).toFixed(2)
    ((v.total / totalExpense) * 100).toFixed(2)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Expense percentage(%)",
        data: values,
        backgroundColor: [
          "#F3E8FF",
          "#FEE2E2",
          "#DCFCE7",
          "#FCE7F3",
          "#FFEDD5",
          "#FEF9C3",
          "#DBEAFE",
          "#E0E7FF",
        ],
        borderColor: [
          "#F59E0B",
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#EC4899",
          "#F43F5E",
          "#06B6D4",
          "#A855F7",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="h-full w-full p-4">
      <Doughnut data={data} options={options} />
    </div>
  );
}
