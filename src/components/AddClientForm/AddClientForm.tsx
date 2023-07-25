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
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPadding, Dark } from "../../utils";
import { UploadFile } from "../UploadFile";
import { cities } from "../../constraints";

type AddClientFormProps = {
  initialRows: {
    firstName: string;
    lastName: string;
    houseNo: string;
    city: string;
    province: string;
    levels: string;
    area: string;
  }[];
  close: any;
};

export const AddClientForm = ({ initialRows, close }: AddClientFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    houseNo: "",
    city: "",
    province: "",
    levels: "",
    area: "",
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
      area: formData.area,
    };
    if (
      formData.houseNo.trim() === "" ||
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.city.trim() === "" ||
      formData.province.trim() === "" ||
      formData.levels.trim() === "" ||
      formData.area.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    initialRows.push(newRow);
    console.log(newRow, "rows");
    setFormData({
      houseNo: "",
      firstName: "",
      lastName: "",
      city: "",
      province: "",
      levels: "",
      area: "",
    });
    close();
  };
  const [isFormComplete, setIsFormComplete] = useState(false);

  const checkFormComplete = (data: any) => {
    return (
      data.houseNo.trim() !== "" &&
      data.firstName.trim() !== "" &&
      data.lastName.trim() !== "" &&
      data.city.trim() !== "" &&
      data.province.trim() !== "" &&
      data.levels.trim() !== "" &&
      data.area.trim() !== ""
    );
  };
 console.log(formData, 'form')
  const [basement, setBasement] = useState(false);
  const handleProvinceChange = (e: any) => {
    const selectedProvince = e.target.value as string;
    setFormData((prevData) => ({
      ...prevData,
      province: selectedProvince,
      city: "", 
    }));
  };
  
  
  const handleCityChange = (e:any) => {
    setFormData((prevData) => ({
      ...prevData,
      city: e.target.value as string,
    }));
  };
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
          variant="outlined"
          sx={{backgroundColor:'whitesmoke'}}
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
          variant="outlined"
          sx={{backgroundColor:'whitesmoke'}}
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
          variant="outlined"
          sx={{backgroundColor:'whitesmoke'}}
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
          variant="outlined"
          inputProps={{ min: "0" }}
          sx={{backgroundColor:'whitesmoke'}}
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="province"
            value={formData.province}
            label="Province"
            onChange={handleProvinceChange}
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
    value={formData.city}
    label="City"
    onChange={handleCityChange}
    disabled={!formData.province}
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
    sx={{backgroundColor:'whitesmoke'}}
  >
    {formData.province &&
      cities[formData.province].map((city:any) => (
        <MenuItem key={city} value={city}>
          {city}
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
          value={formData.area}
          onChange={handlechange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ min: "0" }}
        />
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
          </Button>  */}
        {!isFormComplete ? (
          <Button
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
          </Button>
        ) : (
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
              navigate(
                `/UploadData?levels=${formData?.levels}&basement=${basement}`
              );
            }}
            // disabled={!isFormComplete}
          >
            Add Drawings
          </Button>
        )}
      </DialogActions>
    </Box>
  );
};
