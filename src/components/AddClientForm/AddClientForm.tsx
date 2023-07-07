import { Button, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dark } from "../../utils";


export const AddClientForm=(initialRows:any)=>{
    const [formData, setFormData] = useState({
        houseNo: "",
        clientName: "",
        address: "",
        city: "",
        levels: "",
      });
      const [open, setOpen] = useState(false);
      const navigate =useNavigate();
      const handlechange = (e: any) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.id]: e.target.value,
        }));
        setIsFormComplete(checkFormComplete());
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
          formData.levels.trim()=== ""
        ) {
          setError("Please fill missing fields.");
          alert(error);
          return;
        }
       
        initialRows.push(newRow);
        initialRows.reverse();
        console.log(newRow, "rows");
        setFormData({
          houseNo: "",
          clientName: "",
          address: "",
          city: "",
          levels: "",
        });
        handleClose();
      };
      const [isFormComplete, setIsFormComplete] = useState(false);
      
        const checkFormComplete = () => {
        return(
          formData.houseNo.trim() !== "" &&
          formData.clientName.trim() !== "" &&
          formData.address.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.levels.trim() !== "" 
        )
        };

        const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
            
          };
    return(
        <div>
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
                <Button
                  sx={{
                    backgroundColor: "#26255f",
                    color: "white",
                    mt: 3,
                    height: "3rem",
                    fontSize: "14px",
                    "&:hover": {
                      bgcolor: Dark,
                    },
                  }}
                  onClick={()=> navigate('/UploadData')}
                  disabled={!isFormComplete}
                >
                  {/* <Select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    style={{
                      fontSize: "16px",
                      padding: "4px 10px",
                      alignItems: "center",
                    }}
                  >
                    <option value="volvo" selected>
                      {t("Add Maps")}
                    </option>
                    <option value="auto">{t("Auto")}</option>
                    <option value="manual">{t("Manual")}</option>
                  </Select> */}
                  Add Drawings
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddData}>Add</Button>
              </DialogActions>
              </div>
    )
}