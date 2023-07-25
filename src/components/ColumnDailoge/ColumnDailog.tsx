import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPadding, Dark } from "../../utils";

// type AddClientFormProps = {
//   initialRows: {
//     height: string;
//     width: string;
//     columnId: string;
//     thickness: string;
//     bars: string;
//     ring: string;
//   }[];
//   onClose: any;
// };

export const ColumnDailog = ( {onClose}: any) => {
  // const [formData, setFormData] = useState({
  //   height: '',
  //   width: '',
  //   columnId: '',
  //   thickness: '',
  //   bars: '',
  //   ring: '',
  // });
  
  // const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  // const handlechange = (e: any) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.id]: e.target.value,
  //   }));
  //   setIsFormComplete(checkFormComplete(formData));
  // };
  // console.log(initialRows, "initial");

  // const [error, setError] = useState("");
  // const handleAddData = () => {
  //   const newRow = {
  //     columnId: formData.columnId,
  //     height: formData.height,
  //     width: formData.width,
  //     thickness: formData.thickness,
  //     bars: formData.bars,
  //     ring: formData.ring,
  //   };
  //   if (
  //     formData.columnId.trim() === "" ||
  //     formData.height.trim() === "" ||
  //     formData.width.trim() === "" ||
  //     formData.thickness.trim() === "" ||
  //     formData.bars.trim() === "" ||
  //     formData.ring.trim() === ""
  //   ) {
  //     setError("Please fill in all the fields.");
  //     return;
  //   }

  //   initialRows.push(newRow);
  //   console.log(newRow, "rows");
  //   setFormData({
  //     columnId: "",
  //     height: '',
  //     width: '',
  //     thickness: "",
  //     bars: "",
  //     ring: "",
  //   });
  //   close();
  // };
  const [isFormComplete, setIsFormComplete] = useState(false);

  const checkFormComplete = (data: any) => {
    return (
      data.columnId.trim() !== "" &&
      data.height.trim() === "" &&
      data.width.trim() === ""  &&
      data.thickness.trim() !== "" &&
      data.bars.trim() !== "" &&
      data.ring.trim() !== ""
    );
  };
const[ basement, setBasement]=useState(false);

console.log(basement, 'basement')
  return (
    <Box>
      <DialogTitle>ADD COLUMN</DialogTitle>
      <DialogContent>
       
        <TextField
          autoFocus
          margin="dense"
          id="columnId"
          label="Column ID"
          type="text"
          // value={formData.columnId}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="height"
          label="Height"
          type="text"
          // value={formData.height}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
        />
         <TextField
          autoFocus
          margin="dense"
          id="width"
          label="Width"
          type="text"
          // value={formData.width}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="thickness"
          label="Thickness"
          type="number"
          // value={formData.thickness}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ min: "0" }}
        />
<TextField
          autoFocus
          margin="dense"
          id="bars"
          label="Bars"
          type="text"
          // value={formData.bars}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ min: "0" }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="ring"
          label="Ring"
          type="text"
          // value={formData.ring}
          // onChange={handlechange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ min: "0" }}
        />
<FormControlLabel
  label="Top & Bottom"
  control={<Checkbox color="success" />}
/>
        
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
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
          Next
        </Button>:
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
            // localStorage.setItem("@client_info", JSON.stringify(formData));
            // navigate(`/UploadData`);
          }}
          // disabled={!isFormComplete}
        >
          Next
        </Button>
 }
      </DialogActions>
    </Box>
  );
};
