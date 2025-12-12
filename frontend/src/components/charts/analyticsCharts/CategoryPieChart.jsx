import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart() {
  const income = 5000; // total monthly income

  const categories = {
    "Bills & Utilities": 600,
    "Food & Dining": 800,
    Travel: 400,
    Transportation: 300,
    Education: 500,
    Healthcare: 450,
    Entertainment: 350,
    Shopping: 600,
  };

  const labels = Object.keys(categories);
  const values = Object.values(categories).map((v) =>
    ((v / income) * 100).toFixed(2)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Expense percentage of Income",
        data: values,
        backgroundColor: [
          "#F3E8FF",
          "#FFEDD5",
          "#DCFCE7",
          "#DBEAFE",
          "#FEF9C3",
          "#FEE2E2",
          "#E0E7FF",
          "#FCE7F3",
        ],
        borderColor: [
         "#EC4899",
          "#F59E0B",
          "#10B981",
          "#06B6D4",
          "#F59E0B",
          "#EF4444",
          "#A855F7",
          "#F43F5E",
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
  )
}
