import React from "react";
import { Grid, LinearProgress } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ maxWidth: "80%" }}>
        <Grid
          item
          xs={12}
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>HOME PAGE</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
          }}
        >
          <StatisticBox statName="STAT NAME" statNum={40} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "150px",
              }}
            >
              <StatisticBox statName="STAT NAME" statNum={40} />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "150px",
              }}
            >
              <StatisticBox statName="STAT NAME" statNum={40} />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "150px",
              }}
            >
              <StatisticBox statName="STAT NAME" statNum={40} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ height: "300px", width: "100%" }}>
                {" "}
                <HorizontalBarChart />
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ height: "300px", width: "100%" }}>
                {" "}
                <HorizontalBarChart />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const StatisticBox = ({
  statName,
  statNum,
}: {
  statName: string;
  statNum: number;
}) => {
  const boxSize = "150px";

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
        width: boxSize,
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginBottom: "10px" }}>{statName}</div>
      <div
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >{`${statNum}%`}</div>
      <LinearProgress variant="determinate" value={statNum} />
    </div>
  );
};

const HorizontalBarChart = () => {
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
