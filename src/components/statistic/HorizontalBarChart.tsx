import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { chartDataFactory } from "../utils";

export const HorizontalBarChart = ({
  data,
  label,
}: {
  data: any;
  label: string;
}) => {
  const chartData = chartDataFactory(data, label);

  const barHeight = 50;
  const barSpacing = 10;
  const chartHeight = chartData.labels.length * (barHeight + barSpacing);

  const options: any = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};
