import { Box, Button, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPadding, Dark } from "../../utils";

type AddClientFormProps = {
  initialRows: {
    houseNo: string;
    name: string;
    address: string;
    city: string;
    levels: string;
  }[];
  close: any;
};

export const AddClientForm = ({ initialRows, close }: AddClientFormProps) => {
  const [formData, setFormData] = useState({
    houseNo: "",
    clientName: "",
    address: "",
    city: "",
    levels: "",
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
      name: formData.clientName,
      address: formData.address,
      city: formData.city,
      levels: formData.levels,
    };
    if (
      formData.houseNo.trim() === "" ||
      formData.clientName.trim() === "" ||
      formData.address.trim() === "" ||
      formData.city.trim() === "" ||
      formData.levels.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    initialRows.push(newRow);
    console.log(newRow, "rows");
    setFormData({
      houseNo: "",
      clientName: "",
      address: "",
      city: "",
      levels: "",
    });
    close();
  };
  const [isFormComplete, setIsFormComplete] = useState(false);

  const checkFormComplete = (data: any) => {
    return (
      data.houseNo.trim() !== "" &&
      data.clientName.trim() !== "" &&
      data.address.trim() !== "" &&
      data.city.trim() !== "" &&
      data.levels.trim() !== ""
    );
  };

  return (
    <Box>
      <DialogTitle>ADD CLIENT</DialogTitle>
      <DialogContent>
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
          id="clientName"
          label="Client Name"
          type="text"
          value={formData.clientName}
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
        <TextField
          autoFocus
          margin="dense"
          id="address"
          label="Address"
          type="text"
          value={formData.address}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="city"
          label="City"
          type="text"
          value={formData.city}
          onChange={handlechange}
          fullWidth
          required
          variant="standard"
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
        {!isFormComplete?<Button
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
        </Button>:<Button
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
            navigate(`/UploadData?levels=${formData?.levels}`);
          }}
          // disabled={!isFormComplete}
        >
          Add Drawings
        </Button>
}
      </DialogActions>
    </Box>
  );
};
