import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import { ButtonPadding, Dark, Primary, Secondary } from "../../utils";
export const ViewClientData = ({ close }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DialogTitle sx={{ textAlign: "center" }}>Hassaan Mujtaba</DialogTitle>
      <DialogContent>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <h2>House No : </h2>
            <span> 2</span>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <h2>Address : </h2>
            <span>2</span>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <h2>City : </h2>
            <span>2</span>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <h2>Floor Levels : </h2>
            <span>2</span>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={close}
          sx={{
            padding: ButtonPadding,
            backgroundColor: Dark,
            color: "white",
            "&:hover": { color: "black", backgroundColor: Secondary },
          }}
        >
          Back
        </Button>
      </DialogActions>
    </>
  );
};
