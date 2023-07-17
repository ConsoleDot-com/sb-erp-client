import { Box, Container, TextField, Typography } from "@mui/material";
import { Dark, Primary } from "../../utils";
import { Grid } from "@material-ui/core";

export const SlabSteelCalculator = () => {
  return (
    <>
      <Box>
        <Box sx={{ backgroundColor: Dark, textAlign: "center" }}>
          <Typography sx={{ fontSize: "32px", color: "white" }}>
            Slab Steel Calculator
          </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:'column', rowGap:"10px", padding:'70px'}}>
            <Box sx={{display:"flex", columnGap:'10px'}}>
            <TextField fullWidth variant="outlined" label="Width"/>
            <TextField fullWidth variant="outlined" label="Length"/>

            </Box>
            <Box sx={{display:"flex", columnGap:'10px'}}>
            <TextField fullWidth variant="outlined" label="Width"/>
            <TextField fullWidth variant="outlined" label="Length"/>
            </Box>
            <Box sx={{display:"flex", columnGap:'10px'}}>
            <TextField fullWidth variant="outlined" label="Width"/>
            <TextField fullWidth variant="outlined" label="Length"/>
            </Box>
            <Box sx={{display:"flex", columnGap:'10px'}}>
            <TextField fullWidth variant="outlined" label="Width"/>
            <TextField fullWidth variant="outlined" label="Length"/>
            </Box>
        </Box>
      </Box>
    </>
  );
};
