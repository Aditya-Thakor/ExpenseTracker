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
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: ["Food & utilities","Transportation", "Other"],
        data: [56000, 40000, 80000],
        backgroundColor: [
          "#facc15", // yellow-400
          "#C450D0", // red-500
          "#219CE5", // blue-500
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
