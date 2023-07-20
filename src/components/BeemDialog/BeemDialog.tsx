import { Button, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonPadding, Dark } from "../../utils";
import { useState, useEffect } from "react";

export const BeemDialog=({onClose}:any)=>{
    const [barLayers, setBarLayers] = useState(1);
    console.log(barLayers, 'bar')
    return(
        <>
        <Box>
        <DialogTitle sx={{textAlign:"center",backgroundColor:Dark, border:"1px solid #ddd"}}><Typography style={{fontSize:"24px", border:"1px solid #ddd", borderRadius:"8px", backgroundColor:"white"}}> Beam Id : 1</Typography></DialogTitle>
      <DialogContent>
        <Box sx={{display:"flex", columnGap:"32px"}}>
      <TextField
          autoFocus
          margin="dense"
          id="beemId"
          label="Beem Id"
          type="text"
          required
          variant="standard"
          
        />
        <TextField
          autoFocus
          margin="dense"
          id="length"
          label="Length"
          type="text"
          
          required
          variant="standard"
        />
        </Box>
        <Box sx={{display:"flex", columnGap:"32px"}}>
        <TextField
          autoFocus
          margin="dense"
          id="thickness"
          label="Thickness"
          type="text"
          
          required
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="height"
          label="Height"
          type="number"
          
          required
          variant="standard"
          inputProps={{ min: "0" }}
        />
         </Box>
         <TextField
          autoFocus
          margin="dense"
          id="barLayers"
          label="Bar Layers"
          type="number"
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "1", max:'10' }}
          value={barLayers}
          onChange={(event) => setBarLayers(parseInt(event.target.value, 10))}
        />
        <Box>
            {barLayers >=1 && (
        <TextField
          autoFocus
          margin="dense"
          id="bottomBar"
          label="Bottom Bar"
          type="text"
          sx={{marginRight:"32px"}}
          required
          variant="standard"
        />)}
        {barLayers >=2 && (
        
        <TextField
        autoFocus
        margin="dense"
        id="midlleBar"
        label="Middle Bar"
        type="text"
        
        required
        variant="standard"
       
      />
      
      )}
      <Box>
      {barLayers >= 3 && (
      <TextField
          autoFocus
          margin="dense"
          id="topBar"
          label="Top Bar"
          type="text"
          
          required
          variant="standard"
        />)}
        </Box>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="ring"
          label="Ring"
          type="text"
          fullWidth
          required
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancle</Button>
        <Button >Next</Button>
      </DialogActions>
      </Box>
        </>
    )
}