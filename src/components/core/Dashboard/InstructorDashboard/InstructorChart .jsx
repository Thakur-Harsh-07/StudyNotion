import { useState } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students")

  // Function to generate consistent colors for the chart
  const generateColors = (numColors) => {
    const colors = [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)',
    ]
    return colors.slice(0, numColors)
  }

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateColors(courses.length),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  }

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateColors(courses.length),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  }

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || ''
            const value = context.raw || 0
            const total = context.dataset.data.reduce((a, b) => a + b, 0)
            const percentage = Math.round((value / total) * 100)
            return `${label}: ${value} (${percentage}%)`
          }
        }
      }
    },
    cutout: '60%',
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-xl bg-richblack-800 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-richblack-5">Course Analytics</p>
        <div className="space-x-4 font-semibold">
          <button
            onClick={() => setCurrChart("students")}
            className={`rounded-lg px-4 py-2 transition-all duration-200 ${
              currChart === "students"
                ? "bg-richblack-700 text-yellow-50"
                : "text-richblack-200 hover:text-yellow-50"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setCurrChart("income")}
            className={`rounded-lg px-4 py-2 transition-all duration-200 ${
              currChart === "income"
                ? "bg-richblack-700 text-yellow-50"
                : "text-richblack-200 hover:text-yellow-50"
            }`}
          >
            Income
          </button>
        </div>
      </div>
      <div className="relative mx-auto h-[400px] w-full">
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}