import React from "react";
import { Grid, LinearProgress } from "@mui/material";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1000px",
        }}
      >
        <Grid item xs={12} sx={{ height: "100px", background: "#8098B8" }}>
          <h4>THIS IS THE HOME PAGE</h4>
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
