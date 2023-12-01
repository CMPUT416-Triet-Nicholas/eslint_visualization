import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  TextField,
} from "@mui/material";

interface FilterProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWarningFilterChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleErrorFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterWarnings: boolean;
  filterErrors: boolean;
}

export const Filter = ({
  searchQuery,
  handleSearchChange,
  handleWarningFilterChange,
  handleErrorFilterChange,
  filterWarnings,
  filterErrors,
}: FilterProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            label="Search File"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            margin="normal"
            style={{ width: "500px" }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{
              height: "54px",
              padding: "0 14px",
            }}
            onClick={handleClickOpen}
          >
            Filter
          </Button>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterWarnings}
                onChange={handleWarningFilterChange}
              />
            }
            label="Filter by Warnings"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterErrors}
                onChange={handleErrorFilterChange}
              />
            }
            label="Filter by Errors"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
