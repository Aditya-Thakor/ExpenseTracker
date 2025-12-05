import { Line } from "react-chartjs-2";

export default function FancyChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Income",
        data: [100, 200, 150, 300],
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54,162,235,0.4)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
    plugins: {
      legend: {
        labels: {
          color: "#333",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
