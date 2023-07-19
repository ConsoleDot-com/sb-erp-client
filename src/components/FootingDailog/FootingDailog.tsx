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

type AddClientFormProps = {
  footingData: {
    height: string;
    width: string;
    footingId: string;
    length: string;
    mainBars: string;
    distBars: string;
    area: string;
  }[];
  close: any;
};

export const FootingDailoge = ({ footingData, close }: AddClientFormProps) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    footingId: "",
    length: "",
    mainBars: "",
    distBars: "",
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
  console.log(footingData, "initial");

  const [error, setError] = useState("");
  const handleAddData = () => {
    const newRow = {
      footingId: formData.footingId,
      height: formData.height,
      width: formData.width,
      length: formData.length,
      mainBars: formData.mainBars,
      distBars: formData.distBars,
      area: formData.area,
    };
    if (
      formData.footingId.trim() === "" ||
      formData.height.trim() === "" ||
      formData.width.trim() === "" ||
      formData.length.trim() === "" ||
      formData.mainBars.trim() === "" ||
      formData.distBars.trim() === "" ||
      formData.area.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    footingData.push(newRow);
    console.log(newRow, "rows");
    setFormData({
      footingId: "",
      height: "",
      width: "",
      length: "",
      mainBars: "",
      distBars: "",
      area: "",
    });
    close();
  };
  const [isFormComplete, setIsFormComplete] = useState(false);

  const checkFormComplete = (data: any) => {
    return (
      data.footingId.trim() !== "" &&
      data.height.trim() === "" &&
      data.width.trim() === "" &&
      data.length.trim() !== "" &&
      data.mainBars.trim() !== "" &&
      data.distBars.trim() !== "" &&
      data.area.trim() !== ""
    );
  };
  const [basement, setBasement] = useState(false);

  console.log(basement, "basement");
  return (
    <Box>
      <DialogTitle>ADD FOOTING</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="footingId"
          label="Footing ID"
          type="text"
          value={formData.footingId}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="height"
          label="Height"
          type="text"
          value={formData.height}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="width"
          label="Width"
          type="text"
          value={formData.width}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="length"
          label="Length"
          type="number"
          value={formData.length}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "0" }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="mainBars"
          label="Main Bars"
          type="text"
          value={formData.mainBars}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "0" }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="distBars"
          label="Dist. Bars"
          type="text"
          value={formData.distBars}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "0" }}
        />
        <FormControlLabel
          label="Top & Bottom"
          control={<Checkbox color="success" />}
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
              navigate(`/UploadData`);
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
