import React from "react";
import { LinearProgress } from "@mui/material";

export const StatisticBox = ({
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
