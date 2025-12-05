import { Animation, Animations, Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Demo() {
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
  return (
    <div className="h-screen flex justify-center items-center bg-indigo-50">
      <div className="h-3/4 w-3/4 rounded-xl bg-white ">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
              {
                label: "Expense",
                data: [80000, 75000, 69000, 78000],
                backgroundColor: "#EF4444",
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
}
