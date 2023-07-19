import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPadding, Dark } from "../../utils";
import { UploadFile } from "../UploadFile";

type AddClientFormProps = {
  initialRows: {
    firstName: string;
    lastName: string;
    houseNo: string;
    city: string;
    province: string;
    levels: string;
  }[];
  close: any;
};

export const AddClientForm = ({ initialRows, close}: AddClientFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    houseNo: '',
    city: '',
    province: '',
    levels: '',
  });
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handlechange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
    setIsFormComplete(checkFormComplete(formData));
  };
  console.log(initialRows, "initial");

  const [error, setError] = useState("");
  const handleAddData = () => {
    const newRow = {
      houseNo: formData.houseNo,
      firstName: formData.firstName,
      lastName: formData.lastName,
      city: formData.city,
      province: formData.province,
      levels: formData.levels,
    };
    if (
      formData.houseNo.trim() === "" ||
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      // formData.city.trim() === "" ||
      // formData.province.trim() === "" ||
      formData.levels.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    initialRows.push(newRow);
    console.log(newRow, "rows");
    setFormData({
      houseNo: "",
      firstName: '',
      lastName: '',
      city: "",
      province: "",
      levels: "",
    });
    close();
  };
  const [isFormComplete, setIsFormComplete] = useState(false);

  const checkFormComplete = (data: any) => {
    return (
      data.houseNo.trim() !== "" &&
      formData.firstName.trim() === "" &&
      formData.lastName.trim() === ""  &&
      // data.city.trim() !== "" &&
      // data.province.trim() !== "" &&
      data.levels.trim() !== ""
    );
  };
const[ basement, setBasement]=useState(false);

console.log(basement, 'basement')
  return (
    <Box>
      <DialogTitle>ADD CLIENT</DialogTitle>
      <DialogContent>
       
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
         <TextField
          autoFocus
          margin="dense"
          id="houseNo"
          label="House No"
          type="text"
          value={formData.houseNo}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="levels"
          label="Floor Levels"
          type="number"
          value={formData.levels}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "0" }}
        />
        {/* <FormControl fullWidth sx={{mt:2}}>
  <InputLabel id="demo-simple-select-label">Province</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.province}
    label="Province"
    onChange={handlechange}
    
    
  >
    <MenuItem value={'punjab'}>Punjab</MenuItem>
    <MenuItem value={'sindh'}>Sindh</MenuItem>
    <MenuItem value={'kpk'}>Khyber Pakhtunkhwa</MenuItem>
    <MenuItem value={'balochistan'}>Balochistan</MenuItem>
  </Select>
</FormControl>
        
<FormControl fullWidth sx={{mt:2}}>
  <InputLabel id="demo-simple-select-label">City</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.city}
    label="City"
    onChange={handlechange}
    
    
  >
    <MenuItem value={'punjab'}>Punjab</MenuItem>
    <MenuItem value={'sindh'}>Sindh</MenuItem>
    <MenuItem value={'kpk'}>Khyber Pakhtunkhwa</MenuItem>
    <MenuItem value={'balochistan'}>Balochistan</MenuItem>
  </Select>
</FormControl>
<TextField
          autoFocus
          margin="dense"
          id="levels"
          label="Floor Levels"
          type="number"
          value={formData.levels}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "0" }}
        /> */}
<FormControlLabel
  label="Basement"
  control={<Checkbox color="success" />}
  checked={basement}
  onChange={() => setBasement((prevValue) => !prevValue)}
/>
        
      </DialogContent>
      <DialogActions>
        <Button
          onClick={close}
          sx={{
            backgroundColor: "#26255f",
            color: "white",
            mt: 3,
            padding: ButtonPadding,
            height: "3rem",
            fontSize: "14px",
            "&:hover": {
              bgcolor: Dark,
            },
          }}
        >
          Cancel
        </Button>
        {/* <Button
          onClick={() => {
            handleAddData();
            close();
          }}
        >
          Add
        </Button> */}
        {/* {!isFormComplete?<Button
          sx={{
            backgroundColor: "grey",
            color: "#595959",
            mt: 3,
            padding: ButtonPadding,
            height: "3rem",
            fontSize: "14px",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          Add Drawings
        </Button>: */}
        <Button
          sx={{
            backgroundColor: "#26255f",
            color: "white",
            mt: 3,
            padding: ButtonPadding,
            height: "3rem",
            fontSize: "14px",
            "&:hover": {
              bgcolor: Dark,
            },
          }}
          onClick={() => {
            localStorage.setItem("@client_info", JSON.stringify(formData));
            navigate(`/UploadData?levels=${formData?.levels}&basement=${basement}`);
          }}
          // disabled={!isFormComplete}
        >
          Add Drawings
        </Button>
{/* } */}
      </DialogActions>
    </Box>
  );
};
