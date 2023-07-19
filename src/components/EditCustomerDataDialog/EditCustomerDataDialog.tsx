import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Dark, Secondary } from "../../utils";
import { CustomerData } from "../CustomerData";


export const EditCustomerDataDialog=({editedRow,handleEditField ,saveEdit ,closeEditDialog}:{
    editedRow: CustomerData;
    handleEditField: (e: React.ChangeEvent<HTMLInputElement>, field: keyof CustomerData) => void;
    saveEdit: () => void;
    closeEditDialog: () => void;
  })=>{
    return(
        <>
          <DialogTitle>Edit Row</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="houseNo"
                  label="House No"
                  type="text"
                  value={editedRow.houseNo || ""}
                  onChange={(e:any) => handleEditField(e, "houseNo")}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstName"
                  label="First Name"
                  type="text"
                  value={editedRow.firstName || ""}
                  onChange={(e:any) => handleEditField(e, "firstName")}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastName"
                  label="Last Name"
                  type="text"
                  value={editedRow.firstName || ""}
                  onChange={(e:any) => handleEditField(e, "lastName")}
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
                  onChange={(e:any) => handleEditField(e, "levels")}
                  fullWidth
                  variant="standard"
                  inputProps={{ min: "0" }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  value={editedRow.city || ""}
                  onChange={(e:any) => handleEditField(e, "city")}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="province"
                  label="Province"
                  type="text"
                  value={editedRow.province || ""}
                  onChange={(e :any) => handleEditField(e, "province")}
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
    )
}