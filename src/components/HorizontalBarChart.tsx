import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export const HorizontalBarChart = () => {
  const data = {
    labels: [
      "Item 1",
      "Item 2",
      "Item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7",
      "item 7",
      "item 7",
      "item 7",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 90, 100, 100, 100, 50, 50, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barHeight = 50;
  const barSpacing = 10;
  const chartHeight = data.labels.length * (barHeight + barSpacing);

  const options: any = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: `${chartHeight}px`, width: "90%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};
