import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import data from "../../processedESLint.json";
import { FileTable } from "./FileTable";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
  ruleId: any;
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
            <ExpandedRow row={row} fileName={fileName} />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const ExpandedRow = ({
  row,
  fileName,
}: {
  row: TableDataItem;
  fileName: string;
}) => {
  const [currentIssueName, setIssueName] = React.useState("error");
  const groupByIssues: any = { error: [] };
  row.warnings.forEach((warning) => {
    if (!(warning.ruleId in groupByIssues)) {
      groupByIssues[warning.ruleId] = [];
    }

    groupByIssues[warning.ruleId].push(warning);
  });

  row.errors.forEach((error) => {
    error.ruleId = "error";
    groupByIssues["error"].push(error);
  });

  return (
    <Grid container sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Grid item xs={5}>
        <h3>All Issues</h3>
        {Object.keys(groupByIssues).map((issueName) => (
          <Box mb={2}>
            <IssuesBox
              issueName={issueName}
              values={groupByIssues[issueName]}
              setIssueName={setIssueName}
            />
          </Box>
        ))}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={6}>
        <FileTable fileName={fileName} data={groupByIssues[currentIssueName]} />
      </Grid>
    </Grid>
  );
};

const IssuesBox = ({
  issueName,
  values,
  setIssueName,
}: {
  issueName: string;
  values: any[];
  setIssueName: Function;
}) => {
  return (
    <Grid
      container
      sx={{
        border: "1px solid #ccc",
        height: "50px",
        fontSize: "18px",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "0 10px",
      }}
    >
      <Grid item xs={6} sx={{ fontWeight: "bold" }}>
        {issueName}
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "center" }}>
        {values.length} issues
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "right" }}>
        <IconButton onClick={() => setIssueName(issueName)}>
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
