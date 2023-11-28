import React from "react";
import { Grid } from "@mui/material";
import { StatisticBox } from "./StatisticBox";
import { HorizontalBarChart } from "./HorizontalBarChart";

export const StatisticTab = () => {
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
