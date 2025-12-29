import {Bar} from "react-chartjs-2"
export default function C1() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr","May", "Jun"],
    datasets: [
      {
        label: "Expense",
        data: [80000, 75000, 69000, 78000, 75000, 65500],
        backgroundColor: "#EF4444",
      },
    ],
  };
  const options = {
    Animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    transitions: {
      active: {
        Animations: {
          duration: 400,
          easing: "easeInOutCirc",
        },
      },
    },
  };

  return <div className="h-32 w-full">
    <Bar data={data} options={options}/>
  </div>
}
