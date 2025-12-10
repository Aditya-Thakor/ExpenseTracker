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
    labels: ["Foods & utilyties", "Transportation", "Other"],
    datasets: [
      {
        label: ["Other","Transportation", "Food & utilities"], // remove this label
        data: [56000, 40000, 80000],
        backgroundColor: [
          "#facc15", 
          "#219CE5", 
          "#64748B", 
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
