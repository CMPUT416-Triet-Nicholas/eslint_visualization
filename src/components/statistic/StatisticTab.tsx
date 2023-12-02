import React from "react";
import { Grid } from "@mui/material";
import { StatisticBox } from "./StatisticBox";
import { HorizontalBarChart } from "./HorizontalBarChart";
import data from "../../processedESLint.json";

type StatData = {
  warnings: { [key: string]: number };
  allIssues: number;
  errors: { [key: string]: number };
  fileDetails: any;
};

export const StatisticTab = () => {
  const castedData: StatData = data;
  const issuesFile = Object.keys(data.fileDetails).length;

  let warningCount = 0;
  Object.keys(data.warnings).forEach((key: any) => {
    warningCount += castedData.warnings[key] as number;
  });

  let errorCount = 0;
  Object.keys(data.errors).forEach((key: any) => {
    errorCount += castedData.errors[key] as number;
  });

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
          <StatisticBox statName="ALL ISSUES" statNum={data.allIssues} />
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
              <StatisticBox statName="WARNINGS" statNum={warningCount} />
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
              <StatisticBox statName="ERRORS" statNum={errorCount} />
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
              <StatisticBox statName="ISSUED FILES" statNum={issuesFile} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "100%" }}>
            {" "}
            <HorizontalBarChart data={data.warnings} label="Warnings" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <div style={{ width: "100%" }}>
            {" "}
            <HorizontalBarChart data={data.errors} label="Errors" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
