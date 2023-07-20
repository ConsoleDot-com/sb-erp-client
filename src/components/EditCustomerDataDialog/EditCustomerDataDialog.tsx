import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dark, Secondary } from "../../utils";
import { CustomerData } from "../CustomerData";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { cities } from "../../constraints";

export const EditCustomerDataDialog = ({
  editedRow,
  handleEditField,
  saveEdit,
  closeEditDialog,
  
}: {
  editedRow: CustomerData;
  handleEditField: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof CustomerData
  ) => void;
  saveEdit: () => void;
  closeEditDialog: () => void;
  
}) => {
  const defaultProvince = editedRow.province || "punjab";
  console.log(editedRow, cities, "row")
  return (
    <>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name"
          type="text"
          value={editedRow.firstName || ""}
          onChange={(e: any) => handleEditField(e, "firstName")}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          value={editedRow.lastName || ""}
          onChange={(e: any) => handleEditField(e, "lastName")}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="houseNo"
          label="House No"
          type="text"
          value={editedRow.houseNo || ""}
          onChange={(e: any) => handleEditField(e, "houseNo")}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="levels"
          label="Floor Levels"
          type="number"
          value={editedRow.levels || ""}
          onChange={(e: any) => handleEditField(e, "levels")}
          fullWidth
          variant="standard"
          inputProps={{ min: "0" }}
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="province"
            value={editedRow.province}
            label="Province"
            onChange={(e: any) => handleEditField(e, "province")}
          >
            <MenuItem value={"punjab"}>Punjab</MenuItem>
            <MenuItem value={"sindh"}>Sindh</MenuItem>
            <MenuItem value={"kpk"}>Khyber Pakhtunkhwa</MenuItem>
            <MenuItem value={"balochistan"}>Balochistan</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city"
            value={editedRow.city}
            label="City"
            onChange={(e: any) => handleEditField(e, "city")}
            disabled={!editedRow.province}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
          >
            
            {editedRow.province &&
              cities[editedRow.province.toLowerCase()].map((a: any) => (
                <MenuItem key={a} value={a}>
                  {a}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="area"
          label="Area"
          type="text"
          value={editedRow.area || ""}
          onChange={(e: any) => handleEditField(e, "area")}
          fullWidth
          variant="standard"
        />
        <Button
          sx={{
            backgroundColor: Dark,
            color: "white",
            mt: 3,
            height: "3rem",
            fontSize: "14px",
            "&:hover": {
              bgcolor: Secondary,
            },
          }}
        >
          Edit Drawings
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={saveEdit}>Edit</Button>
        <Button onClick={closeEditDialog}>Cancel</Button>
      </DialogActions>
    </>
  );
};
