import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import { ButtonPadding, Dark, Primary, Secondary } from "../../utils";
import {Grid} from "@mui/material"
import { hover } from "@testing-library/user-event/dist/hover";
export const ViewClientData = ({ close }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DialogTitle sx={{ textAlign: "center", fontWeight:"bold"}}>Hassaan Mujtaba</DialogTitle>
      <DialogContent>
        <Box sx={{display:'flex', flexDirection:'column', rowGap:'6px'}}>
          <Box 
            sx={{ display: "flex", alignItems: "center", columnGap: "50px" }}
          >
            <h3>House No : </h3>
            <span> 73</span>
          </Box>
          <Box 
            sx={{ display: "flex", alignItems: "center", columnGap: "50px"  }}
          >
            <h3>Address:</h3>
            <span >Mohalla Siras Wala, Kallur kot.</span>
          </Box>
          
          <Box 
            sx={{ display: "flex", alignItems: "center", columnGap: "50px" }}
          >
            <h3>City : </h3>
            <span>Bhakkar</span>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "50px" }}
          >
            <h3>Floor Levels : </h3>
            <span>2</span>
          </Box>
          </Box>
          <h3>Files</h3>
          <Box sx={{display:'flex', flexDirection:'column', rowGap:'3px'}}>
            <Button sx={{width:'100%', backgroundColor:Dark, color:'white', '&:hover':{backgroundColor:Secondary}}}>Floor 1 File</Button>

            <Button sx={{width:'100%', backgroundColor:Dark, color:'white', '&:hover':{backgroundColor:Secondary}}}>Floor 2 File</Button>

            <Button sx={{width:'100%', backgroundColor:Dark, color:'white', '&:hover':{backgroundColor:Secondary}}}>Floor 3 File</Button>

            <Button sx={{width:'100%', backgroundColor:Dark, color:'white', '&:hover':{backgroundColor:Secondary}}}>Floor 4 File</Button>

          </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={close}
          sx={{
            padding: ButtonPadding,
            backgroundColor: Dark,
            color: "white",
            "&:hover": { color:'white', backgroundColor: Secondary , },
          }}
        >
          Back
        </Button>
      </DialogActions>
    </>
  );
};
