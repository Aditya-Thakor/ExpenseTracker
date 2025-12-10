import {Bar } from 'react-chartjs-2'
export default function C2() {
    const data = {
         labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
              {
                label: "Expense",
                data: [80000, 75000, 69000, 78000],
                backgroundColor: "#EF4444",
              },
            ],
    }
    const options ={
        maintainAspectRatio: false,
        responsive: true,
    }
    return(
        <div className='h-full w-full '>
            <Bar 
                data={data}
                options={options}
            />
        </div>
    )
}