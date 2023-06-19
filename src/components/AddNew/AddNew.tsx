import styled from "@emotion/styled";
import { Box, Container, Button } from "@mui/material";
import {  Dark, Secondary } from "../../utils";
export const Input = styled("input")({
  width: "300px",
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
    padding: "10px 15px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    height: "2rem",
    transition: "background .2s ease-in-out",
  },
  " &:hover": {
    background: Dark,
    color: "white",
  },
});

interface AddNewProps {
  onDelete: () => void;
}
export const AddNew = ({ onDelete }: AddNewProps) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <Container>
      <Box
        mt={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box mr={3}>
          <Input type="file" accept="image/*" />
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: Secondary,
              "&:hover": {
                backgroundColor: Dark,
                color: "white",
              },
            }}
          >
            View
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: Secondary,
              "&:hover": {
                backgroundColor: Dark,
                color: "white",
              },
            }}
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
