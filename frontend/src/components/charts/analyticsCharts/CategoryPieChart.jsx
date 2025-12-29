import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart() {
  // const income = 5000; // total monthly income
  const { categories, totalIncome } = useContext(TransactionContext);
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
  const labels = categories.map((c) => c.category);
  // console.log("lbls---",labels);

  // const values = Object.values(categories).map((v) =>
  //   ((v / income) * 100).toFixed(2)
  // );
  const values = categories.map((v) =>
    ((v.total / totalIncome) * 100).toFixed(2)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Expense percentage of Income",
        data: values,
        backgroundColor: [
          "#DCFCE7",
          "#FEE2E2",
          "#FFEDD5",
          "#FEF9C3",
          "#FCE7F3",
          "#DBEAFE",
          "#E0E7FF",
          "#F3E8FF",
        ],
        borderColor: [
          "#10B981",
          "#EF4444",
          "#F59E0B",
          "#F59E0B",
          "#F43F5E",
          "#06B6D4",
          "#A855F7",
          "#EC4899",
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
