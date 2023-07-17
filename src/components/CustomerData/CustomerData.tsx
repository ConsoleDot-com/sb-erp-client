
import {
  styled,
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
import { EditCustomerDataDialog } from "../EditCustomerDataDialog";
import { url } from "inspector";
import { bg } from "../../assets/jpg";

export interface CustomerData {
  houseNo: string;
  name: string;
  address: string;
  city: string;
  levels: string;
}
const initialRows = [
  {
    houseNo: "B-23",
    name: "Jon",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "A-02",
    name: "Cersei",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "P-53",
    name: "Jaime",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "I-09",
    name: "Arya",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "G-65",
    name: "Daenerys",
    address: "valancia",
    city: "Lahore",
    levels: "4",
  },
  {
    houseNo: "G-67",
    name: "dvd",
    address: "'V'alancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "H-12",
    name: "Ferrara",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "H-65",
    name: "Rossini",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
  {
    houseNo: "H-55",
    name: "Harvey",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
    levels: "3",
  },
];

export const CustomerData = () => {
  const [fileUploaded, setFileUploaded] = useState(false);

  
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const reverseRows = initialRows.reverse();
  const [data, setData] = useState<any>(reverseRows);

  const [searchQuerry, setSearchQuerry] = useState("");

  const handleDelete = (id: any) => {
    const confirmDelete = window.confirm(
      "Are you sure ! You want to delete this client? "
    );
    if (confirmDelete) {
      const deleteRow = data.filter((_: any, i: any) => i != id);
      setData(deleteRow);
      console.log(deleteRow, "del");
    }
  };
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


  const [editedRow, setEditedRow] = useState<CustomerData>({
    houseNo: "",
    name: "",
    address: "",
    city: "",
    levels: "",
  });



  const saveEdit = () => {
    const updatedData = [...data];
    updatedData[editIndex] = editedRow;
    setData(updatedData);
    setEditIndex(-1);
    setEditedRow({
      houseNo: "",
      name: "",
      address: "",
      city: "",
      levels: "",
    });
    setOpenEditDialog(false);
  };

  const closeEditDialog = () => {
    setEditIndex(-1);
    setEditedRow({
      houseNo: "",
      name: "",
      address: "",
      city: "",
      levels: "",
    });
    setOpenEditDialog(false);
  };

  return (
    <>
      <Layout >
        <Box >
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
                      onChange={(e) => setSearchQuerry(e.target.value)}
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
                    bgcolor: Secondary,
                  },
                }}
                onClick={handleClickOpen}
              >
                Add New
              </Button>
            </Box>
            <Box mt={5}>
              <div style={{ height: '100%', width: "100%" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{backgroundColor:"whitesmoke",textTransform:'uppercase'}}>
                        <TableCell sx={{fontWeight:"bold"}}>House No</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold"}}>Client Name</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold"}}>Address</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold"}}>City</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold"}}>Floors</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold"}}></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data
                        .filter((item: any) => {
                          return searchQuerry.toLowerCase() === ""
                            ? item
                            : item.name.toLowerCase().includes(searchQuerry);
                        })
                        .map((row: any, index: any) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell align="left">{row.houseNo}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="left">{row.city}</TableCell>
                            <TableCell align="left">{row.levels}</TableCell>
                            <TableCell align="left" sx={{display:'flex', flexDirection:{xl:'row', lg:'row', md:"column", sm:'column', xs:"column"}, rowGap:"4px"}}>
                            <VisibilityIcon
                                sx={{mr:1, cursor: "pointer" }}
                                onClick={() => handleClickView()}
                              />
                              <EditIcon
                                sx={{ mr: 1, cursor: "pointer"}}
                                onClick={() => isOpenEditDialog(index)}
                              />{" "}
                              
                              <DeleteOutlineIcon
                                sx={{cursor: "pointer" }}
                                onClick={() => handleDelete(index)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)} >
              <AddClientForm
                initialRows={initialRows}
                close={() => setOpen(false)}
              />
            </Dialog>
            <Dialog open={openViewDialog} onClose={handleViewDialogClose}>
              <ViewClientData close={() => setOpenViewDialog(false)} />
            </Dialog>
            <Dialog open={openEditDialog} onClose={closeEditDialog}>
              <EditCustomerDataDialog editedRow={editedRow}  handleEditField={handleEditField} saveEdit={saveEdit} closeEditDialog={closeEditDialog}/>
            </Dialog>
          </Container>
        </Box>
      </Layout>
    </>
  );
};
