import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

export default function MyDoughnut() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Colors",
        data: [30, 40, 30],
        backgroundColor: [
          "#ef4444", // red-500
          "#3b82f6", // blue-500
          "#facc15", // yellow-400
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",   // makes it a donut size (adjust 40%–80%)
  };

  return <Doughnut data={data} options={options} />;
}
