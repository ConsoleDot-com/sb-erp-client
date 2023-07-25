import { Button, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonPadding, Dark } from "../../utils";
import { useState, useEffect } from "react";

export const BasementWall = ({close}:any) => {
  return (
    <>
      <Box>
        <DialogTitle
          sx={{
            textAlign: "center",
            backgroundColor: Dark,
            border: "1px solid #ddd",
          }}
        >
          <Typography
            style={{
              fontSize: "24px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            Basement Wall
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
          <TextField
          autoFocus
          margin="dense"
          id="sectionId"
          label="Section ID"
          type="number"
          fullWidth
          required
          variant="standard"
          inputProps={{ min: "1", max:'10' }}
          value={''}
        />
        <Box sx={{display:"flex", columnGap:"16px"}}>
        <TextField
          autoFocus
          margin="dense"
          id="height"
          label="Height"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <TextField
          autoFocus
          margin="dense"
          id="width"
          label="Width"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="distributionBar"
          label="Distribution Bar"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <TextField
          autoFocus
          margin="dense"
          id="mainBar"
          label="Main Bar"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <TextField
          autoFocus
          margin="dense"
          id="wallHeight"
          label="Wall Height"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <Box sx={{display:"flex", columnGap:"16px"}}>
        <TextField
          autoFocus
          margin="dense"
          id="leftBar"
          label="Left Bar"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <TextField
          autoFocus
          margin="dense"
          id="rightBar"
          label="Right Bar"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="lengthBass"
          label="Length Bass"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
        <TextField
          autoFocus
          margin="dense"
          id="waterStoper"
          label="Water Stoper"
          type="text"
          fullWidth
          required
          variant="outlined"
          value={''}
        />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancle</Button>
          <Button>Next</Button>
        </DialogActions>
      </Box>
    </>
  );
};
