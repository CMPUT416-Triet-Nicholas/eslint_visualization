import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { StyledTableCell, StyledTableRow } from "./DetailedTable";

export const FileTable = ({
  fileName,
  data,
}: {
  fileName: string;
  data: any;
}) => {
  console.log("Data: ", data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>File name</StyledTableCell>
            <StyledTableCell align="left">Violated rule</StyledTableCell>
            <StyledTableCell align="left">Line</StyledTableCell>
            <StyledTableCell align="left">Column</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any) => {
            console.log("ITEM: ", item);
            return <DetailedTableRow row={item} fileName={fileName} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const DetailedTableRow = ({
  row,
  fileName,
}: {
  row: any;
  fileName: string;
}) => {
  return (
    <>
      <StyledTableRow key={fileName}>
        <StyledTableCell component="th" scope="row">
          {fileName}
        </StyledTableCell>
        <StyledTableCell align="left">{row.ruleId}</StyledTableCell>
        <StyledTableCell align="left">{row.line}</StyledTableCell>
        <StyledTableCell align="left">{row.column}</StyledTableCell>
      </StyledTableRow>
    </>
  );
};
