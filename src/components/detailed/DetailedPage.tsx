import React from "react";
import { Grid } from "@mui/material";
import { DetailedTable } from "./DetailedTable";

export const DetailedPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ maxWidth: "80%" }}>
        <Grid item xs={12}>
          <DetailedTable />
        </Grid>
      </Grid>
    </div>
  );
};
