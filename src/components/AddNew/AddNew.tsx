import styled from "@emotion/styled";
import { Box, Container, Button } from "@mui/material";
import { Dark, Secondary } from "../../utils";
export const Input = styled("input")({
  // width: "300px",
  maxWidth: "100%",
  color: "#444",
  background: " #fff",
  borderRadius: "10px",
  border: "1px solid #555",
  height: "2rem",
  "&::file-selector-button": {
    marginRight: " 20px",
    border: "none",
    background: "#084cdf",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    height: "2rem",
    padding: "10px 20px",
    transition: "background .2s ease-in-out",
  },
  " &:hover": {
    background: Dark,
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
          }}
          type="file"
          accept="image/*"
        />
      </Box>
    </Box>
  );
};
