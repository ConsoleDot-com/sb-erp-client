import { Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";

export const BasementWall = () => {
  return (
    <>
      <Box
        sx={{
          border: "none",
          padding: "10px",
          borderRadius: "8px solid white",
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);",
        }}
      >
        <Typography
          style={{
            fontSize: "24px",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          Basement Wall
        </Typography>

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
            inputProps={{ min: "1", max: "10" }}
            value={""}
          />
          <Box sx={{ display: "flex", columnGap: "16px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="height"
              label="Height"
              type="text"
              fullWidth
              required
              variant="outlined"
              value={""}
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
              value={""}
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
            value={""}
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
            value={""}
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
            value={""}
          />
          <Box sx={{ display: "flex", columnGap: "16px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="leftBar"
              label="Left Bar"
              type="text"
              fullWidth
              required
              variant="outlined"
              value={""}
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
              value={""}
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
            value={""}
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
            value={""}
          />
        </Box>
      </Box>
    </>
  );
};
