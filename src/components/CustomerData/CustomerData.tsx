import styled from "@emotion/styled";
import { Container, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Dark, H1, Primary, Secondary } from "../../utils";
import { Layout } from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "House No",
    width: 90,
  },
  { field: "name", headerName: "Name", width: 190 },

  {
    field: "address",
    headerName: "Address",
    type: "number",
    width: 400,
  },
  {
    field: "city",
    headerName: "City",
    type: "number",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    name: "Jon",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 2,
    name: "Cersei",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Jaime",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 4,
    name: "Arya",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  { id: 5, name: "Daenerys", address: "valancia", city: "Lahore" },
  {
    id: 6,
    name: "dvd",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 7,
    name: "Ferrara",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 8,
    name: "Rossini",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 9,
    name: "Harvey",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
];

export const Td = styled("td")({
  width: "10rem",
  textAlign: "center",
});

const Select = styled.select`
  border: none;
  background-color: transparent;
  color: white;
  width: 5rem;
  outline: none;
  position: relative;
  & option {
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

// this is how text fields of mui is styled
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#26255f",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#26255f",
    },
    "&:hover fieldset": {
      borderColor: "#26255f",
    },
    "&.Mui-focused fieldset": {
      borderColor: Dark,
    },
    "& label": {
      color: "white",
    },
  },
});
export const CustomerData = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const navigate = useNavigate();
  // setting the state with the selected option
  const handleSelectChange = (event: any) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    // Navigate to the desired page based on the selected option
    if (selectedOption === "auto") {
      navigate("/uploadData");
    }
  };
  const { t } = useTranslation();

  return (
    <Layout>
      <Box>
        <Container>
          <H1 mt={3} variant="h1" sx={{ color: Dark, textAlign: "center" }}>
            {t("Customers Data")}
          </H1>
          <Box
            sx={{
              display: "flex",
              height: "4rem",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <Stack spacing={2} sx={{ width: "100%", mt: 3, mb: 2 }}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={rows.map((option) => option.name)}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label={t("Search input")}
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      style: {
                        color: "black",
                        backgroundColor: "white",
                        // height: "2.5rem",
                      },
                    }}
                    sx={{
                      color: "white",

                      height: "2rem",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  />
                )}
              />
            </Stack>

            <Button
              sx={{
                backgroundColor: "#26255f",
                color: "white",
                padding: "10px 0px",
                width: "30%",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: Dark,
                },
              }}
              // onClick={routeChange}
            >
              <Select
                value={selectedValue}
                onChange={handleSelectChange}
                style={{ width: "100%",fontSize:"16px", padding:"4px 10px", alignItems:"center" }}
              >
                <option value="volvo" selected >
                  Add New
                </option>
                <option value="auto" >Auto</option>
                <option value="manual">Manual</option>
              </Select>
            </Button>
          </Box>
          <Box mt={5}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                sx={{ border: "1px solid black" }}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
