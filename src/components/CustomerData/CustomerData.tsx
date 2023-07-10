import styled from "@emotion/styled";
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
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
import { AddClientForm } from "../AddClientForm";
import { ViewClientData } from "../ViewClientData";

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

  const [searchQuerry, setSearchQuerry] = useState("");
  const handleSearch = (e: any) => {
    setSearchQuerry(e.target.value);
  };

  const reverseRows = initialRows.reverse();
  const [data, setData] = useState<any>(reverseRows);
  const filterData = initialRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuerry.toLowerCase())
  );
  console.log(filterData, searchQuerry, "filter");
  const [isClick, setIsClick] = useState(false);
  const isSearchButtonClick = () => {
    setIsClick(true);
  };

  const handleDelete = (id: any) => {
    const confirmDelete= window.confirm("Are you sure ! You want to delete this client? ")
   if (confirmDelete){
    const deleteRow = data.filter((_: any, i: any) => i != id);
    setData(deleteRow);
  }};
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const handleViewDialogOpen = () => {
    setOpenViewDialog(true);
  };
  const handleViewDialogClose = () => {
    setOpenViewDialog(false);
  };
  const handleClickView = () => {
    handleViewDialogOpen();
  };

  const [editIndex, setEditIndex] = useState(-1);
  const handleEdit = (index: any) => {
    setEditIndex(index);
  };
  const [editedRow, setEditedRow] = useState({});
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const isOpenEditDialog = (index: any) => {
    setEditedRow(data[index]);
    setEditIndex(index);
    setOpenEditDialog(true);
  };
  const handleEditField = (e: any, field: any) => {
    setEditedRow((prevRow) => ({
      ...prevRow,
      [field]: e.target.value,
    }));
  };
  const saveEdit = () => {
    const updatedData = [...data];
    updatedData[editIndex] = editedRow;
    setData(updatedData);
    setEditIndex(-1);
    setEditedRow({});
    setOpenEditDialog(false);
  };
  const closeEditDialog = () => {
    setEditIndex(-1);
    setEditedRow({});
    setOpenEditDialog(false);
  };

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
                    <TextField
                      onChange={handleSearch}
                      value={searchQuerry}
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
                        },
                        endAdornment: (
                          <Button
                            onClick={isSearchButtonClick}
                            sx={{
                              border: " 1px solid #ddd",
                              textTransform: "capitalize",
                            }}
                          >
                            <SearchIcon />
                            search
                          </Button>
                        ),
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
                Add New
              </Button>
            </Box>
            <Box mt={5}>
              <div style={{ height: 400, width: "100%" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>House No</TableCell>
                        <TableCell align="left">Client Name</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">Floors</TableCell>
                        <TableCell align="left">Edit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row: any, index: any) => (
                        <TableRow
                          key={row.index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row.houseNo}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.address}</TableCell>
                          <TableCell align="left">{row.city}</TableCell>
                          <TableCell align="left">{row.levels}</TableCell>
                          <TableCell align="left">
                            <EditIcon
                              sx={{ mr: 1, cursor: "pointer" }}
                              onClick={() => isOpenEditDialog(index)}
                            />{" "}
                            <DeleteOutlineIcon
                              sx={{ mr: 1, cursor: "pointer" }}
                              onClick={() => handleDelete(index)}
                            />
                            <VisibilityIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() => handleClickView()}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <AddClientForm
                initialRows={initialRows}
                close={() => setOpen(false)}
              />
            </Dialog>
            <Dialog open={openViewDialog} onClose={handleViewDialogClose} fullScreen>
              <ViewClientData close={()=> setOpenViewDialog(false)}/>
            </Dialog>
            <Dialog open={openEditDialog} onClose={closeEditDialog}>
              <DialogTitle>Edit Row</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="houseNo"
                  label="House No"
                  type="text"
                  value={data.houseNo}
                  onChange={(e) => handleEditField(e, "houseNo")}
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
                  value={data.clientName}
                  onChange={(e) => handleEditField(e, "clientName")}
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
                  value={data.levels}
                  onChange={(e) => handleEditField(e, "levels")}
                  fullWidth
                  required
                  variant="standard"
                  inputProps={{ min: "0" }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  value={data.address}
                  onChange={(e) => handleEditField(e, "address")}
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
                  value={data.city}
                  onChange={(e) => handleEditField(e, "city")}
                  fullWidth
                  required
                  variant="standard"
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
                >
                  Edit Drawings
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={saveEdit}>Save</Button>
                <Button onClick={closeEditDialog}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Box>
      </Layout>
    </>
  );
};
