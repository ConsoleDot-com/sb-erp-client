import styled from "@emotion/styled";
import { Box, Container, Button } from "@mui/material";
import { Dark, Secondary } from "../../utils";
export const Input = styled("input")({
  // width: "300px",
  maxWidth: "100%",
  color: "#444",
  background: " #fff",
  borderRadius: "8px",
  border: "1px solid #555",
  height: "2rem",
  "&::file-selector-button": {
    marginRight: " 20px",
    border: "none",
    background: "#26255f",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    height: "2rem",
    padding: "10px 20px",
    transition: "background .2s ease-in-out",
  },
  "&::file-selector-button:hover": {
    color: "black",
    background: "white",
  },
  " &:hover": {
    background: '#ddd',
    color: "white",
  },
});

export const AddNew = () => {
  return (
    <Box mt={2}>
      <Box mr={3}>
        <Input
          style={{
            width: "100%",
            padding: "10px 10px",
          }}
          type="file"
          accept="image/*"
        />
      </Box>
    </Box>
  );
};
