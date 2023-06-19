import styled from "@emotion/styled";
import { Container, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Dark, Primary, Secondary } from "../../utils";
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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
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
  return (
    <Box>
      <Container>
        <Box
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "1px solid #ddd",
            backgroundColor: Primary,
            borderRadius: "8px",
            color: "white",
            height: "5rem",
            maxHeight: "7rem",
          }}
        >
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={rows.map((option) => option.name)}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Search input"
                  InputLabelProps={{
                    style: {
                      color: 'white',
                      fontSize: "16px",
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    style: {
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: Secondary,
                      height: "3rem",
                    },
                  }}
                  sx={{
                    color: "white",
                  }}
                />
              )}
            />
          </Stack>
        </Box>

        <Box mt={5}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
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
  );
};
