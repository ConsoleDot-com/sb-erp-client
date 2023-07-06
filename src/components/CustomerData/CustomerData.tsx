import styled from "@emotion/styled";
import { Container, Box, Button, Table, TableBody } from "@mui/material";
import TextField from "@mui/material/TextField";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  ButtonHover,
  ButtonPadding,
  Dark,
  H1,
  Primary,
  Secondary,
} from "../../utils";
import { Layout } from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const initialRows = [
  {
    houseNo: "1",
    name: "Jon",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "2",
    name: "Cersei",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "3",
    name: "Jaime",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "4",
    name: "Arya",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "5",
    name: "Daenerys",
    address: "valancia",
    city: "Lahore",
    levels: "4",
  },
  {
    houseNo: "6",
    name: "dvd",
    address: "'V'alancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "7",
    name: "Ferrara",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "8",
    name: "Rossini",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "9",
    name: "Harvey",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
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
  padding: ButtonPadding,
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


  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    houseNo: "",
    clientName: "",
    address: "",
    city: "",
    levels: "",
  });
  const handlechange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
    setIsFormComplete(checkFormComplete());
  };
  console.log(initialRows, "initial");

  const [error, setError] = useState("");
  const handleAddData = () => {
   
    const newRow = {
      houseNo: formData.houseNo,
      name: formData.clientName,
      address: formData.address,
      city: formData.city,
      levels: formData.levels,
    };
    if (
      formData.houseNo.trim() === "" ||
      formData.clientName.trim() === "" ||
      formData.address.trim() === "" ||
      formData.city.trim() === "" ||
      formData.levels.trim()=== ""
    ) {
      setError("Please fill missing fields.");
      alert(error);
      return;
    }
   
    initialRows.push(newRow);
    initialRows.reverse();
    console.log(newRow, "rows");
    setFormData({
      houseNo: "",
      clientName: "",
      address: "",
      city: "",
      levels: "",
    });
    handleClose();
  };
  const [isFormComplete, setIsFormComplete] = useState(false);
  
    const checkFormComplete = () => {
    return(
      formData.houseNo.trim() !== "" &&
      formData.clientName.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.levels.trim() !== "" 
    )
    };
  const [fileUploaded, setFileUploaded] = useState(false);

  // const [selectedValue, setSelectedValue] = useState<string>("");
  // const navigate = useNavigate();
  // // setting the state with the selected option
  // const handleSelectChange = (event: any) => {
  //   const selectedOption = event.target.value;
  //   setSelectedValue(selectedOption);
  //   // Navigate to the desired page based on the selected option
  //   if (selectedOption === "auto") {
  //     navigate("/uploadData");
  //   }
  //   if (selectedOption === "manual") {
  //     window.location.href = "https://boq-client.vercel.app/";
  //   }
  // };
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: Dark,
    //   color: theme.palette.common.white,
    // },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    // "&:last-child td, &:last-child th": {
    //   border: 0,
    // },
  }));
  

  const data = initialRows.reverse();
  return (
    <>
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
              <Stack spacing={2} sx={{ width: "80%", mt: 3, mb: 2 }}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={initialRows.map((option) => option.name)}
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
                  height: "3rem",
                  width: "20%",
                  fontSize: "14px",
                  "&:hover": {
                    bgcolor: Dark,
                  },
                }}
                onClick={handleClickOpen}
              >
                {/* <Select
                value={selectedValue}
                onChange={handleSelectChange}
                style={{ width: "100%",fontSize:"16px", padding:"4px 10px", alignItems:"center" }}
              >
                <option value="volvo" selected >
                  {t("Add New")}
                </option>
                <option value="auto" >{t("Auto")}</option>
                <option value="manual">{t("Manual")}</option>
              </Select> */}
                Add New
              </Button>
            </Box>
            <Box mt={5}>
              <div style={{ height: 400, width: "100%" }}>
                {/* <DataGrid
                sx={{ border: "1px solid black" ,}}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10 , 15, 20 ,25]}
                checkboxSelection
              /> */}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>House No</TableCell>
                        <TableCell align="left">Client Name</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">Floors</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row.houseNo}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.address}</TableCell>
                          <TableCell align="left">{row.city}</TableCell>
                          <TableCell align="left">{row.levels}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
              </div>
            </Box>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>ADD CLIENT</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="houseNo"
                  label="House No"
                  type="text"
                  value={formData.houseNo}
                  onChange={handlechange}
                  fullWidth
                  required
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="clientName"
                  label="Client Name"
                  type="text"
                  value={formData.clientName}
                  onChange={handlechange}
                  fullWidth
                  required
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  value={formData.address}
                  onChange={handlechange}
                  fullWidth
                  required
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  value={formData.city}
                  onChange={handlechange}
                  fullWidth
                  required
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="levels"
                  label="Floor Levels"
                  type="number"
                  value={formData.levels}
                  onChange={handlechange}
                  fullWidth
                  required
                  variant="standard"
                  inputProps={{ min: "0" }}
                />
                <Button
                  sx={{
                    backgroundColor: "#26255f",
                    color: "white",
                    mt: 3,
                    height: "3rem",
                    fontSize: "14px",
                    "&:hover": {
                      bgcolor: Dark,
                    },
                  }}
                  onClick={()=> navigate('/UploadData')}
                  disabled={!isFormComplete}
                >
                  {/* <Select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    style={{
                      fontSize: "16px",
                      padding: "4px 10px",
                      alignItems: "center",
                    }}
                  >
                    <option value="volvo" selected>
                      {t("Add Maps")}
                    </option>
                    <option value="auto">{t("Auto")}</option>
                    <option value="manual">{t("Manual")}</option>
                  </Select> */}
                  Add Drawings
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddData}>Add</Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Box>
      </Layout>
    </>
  );
};
