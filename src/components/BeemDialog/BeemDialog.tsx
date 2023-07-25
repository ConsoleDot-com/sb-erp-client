import { Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";

import { useState, useEffect } from "react";

export const BeemDialog = ({ onClose }: any) => {
  const [barLayers, setBarLayers] = useState(1);
  console.log(barLayers, "bar");
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
          {" "}
          Beam Id : 1
        </Typography>

        <Box>
          <Box sx={{ display: "flex", columnGap: "32px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="beemId"
              label="Beem Id"
              type="text"
              required
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="length"
              label="Length"
              type="text"
              required
              variant="outlined"
            />
          </Box>
          <Box sx={{ display: "flex", columnGap: "32px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="thickness"
              label="Thickness"
              type="text"
              required
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="height"
              label="Height"
              type="number"
              required
              variant="outlined"
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
            variant="outlined"
            inputProps={{ min: "1", max: "10" }}
            value={barLayers}
            onChange={(event) => setBarLayers(parseInt(event.target.value, 10))}
          />
          <Box>
            {barLayers >= 1 && (
              <TextField
                autoFocus
                margin="dense"
                id="bottomBar"
                label="Bottom Bar"
                type="text"
                sx={{ marginRight: "32px" }}
                required
                variant="outlined"
              />
            )}
            {barLayers >= 2 && (
              <TextField
                autoFocus
                margin="dense"
                id="midlleBar"
                label="Middle Bar"
                type="text"
                required
                variant="outlined"
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
                  variant="outlined"
                />
              )}
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
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="down"
            label="Down"
            type="text"
            fullWidth
            required
            variant="outlined"
          />
        </Box>
      </Box>
    </>
  );
};
