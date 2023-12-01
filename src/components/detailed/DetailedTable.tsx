import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import data from "../../processedESLint.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TableData {
  [key: string]: TableDataItem;
}

interface TableDataItem {
  warnings: WarningData[];
  errors: ErrorData[];
}
interface WarningData {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
}

interface ErrorData {
  fatal: boolean;
  severity: number;
  line: number;
  column: number;
  message: string;
}

export const DetailedTable = () => {
  const [tableData, setTableData] = React.useState<TableData>(data.fileDetails);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>File name (relative)</StyledTableCell>
            <StyledTableCell align="left">Warnings</StyledTableCell>
            <StyledTableCell align="left">Errors</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(tableData).map((fileName) => {
            return (
              <DetailedTableRow row={tableData[fileName]} fileName={fileName} />
            );
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
  row: TableDataItem;
  fileName: string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <StyledTableRow key={fileName}>
        <StyledTableCell component="th" scope="row">
          <IconButton onClick={handleExpandClick}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {fileName}
        </StyledTableCell>
        <StyledTableCell align="left">{row.warnings.length}</StyledTableCell>
        <StyledTableCell align="left">{row.errors.length}</StyledTableCell>
      </StyledTableRow>
      {isExpanded && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <div style={{ height: "200px" }}>
              Expanded content for {fileName}
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
