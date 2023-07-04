import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, Box, Typography } from "@mui/material";
import { ButtonHover, ButtonPadding, Dark } from "../../utils";
import { Logins } from "../../assets";

export const FileViewDialog = ({ close, data }: any) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: Dark,
      color: theme.palette.common.white,
    },
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

  function createData(
    id: number,
    description: string,
    unit: string,
    quantity: number,
    rate: number,
    amount: number
  ) {
    return { id, description, unit, quantity, rate, amount };
  }

  const rows = [
    createData(1, "Bricks", "No's", Math.ceil(data?.bricks) || 0, 24, 4.0),
    createData(1, "Sand", "No's", Math.ceil(data?.sand) || 0, 37, 4.3),
    createData(1, "Cement", "No's", Math.ceil(data?.cement) || 0, 24, 6.0),
    createData(1, "Crush", "No's", 3.7, 67, 4.3),
    createData(1, "Bajar", "No's", Math.ceil(data?.bajar) || 0, 49, 3.9),
    createData(1, "Ghausa", "No's", 16.0, 49, 3.9),
    createData(1, "Steel", "No's", 16.0, 49, 3.9),
    createData(1, "Membrane Sheet", "No's", 16.0, 49, 3.9),
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <img
            src={Logins}
            alt="image"
            style={{ width: "70px", height: "70px" }}
          />

          <Typography
            sx={{
              fontSize: {
                xl: "48px",
                lg: "32px",
                md: "32px",
                sm: "32px",
                xs: "24px",
              },
              textAlign: "center",
              fontWeight: "bold",
              padding: "10px 0",
              letterSpacing: "5px",
              color: Dark,
            }}
          >
            View Report
          </Typography>
        </Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Unit</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Rate</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="left">{row.unit}</StyledTableCell>
                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">{row.rate}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.rate * row.quantity}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            mt: "16px",
            mb: "16px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={close}
            variant="outlined"
            sx={{
              backgroundColor: Dark,
              color: "white",
              padding: ButtonPadding,
              "&:hover":ButtonHover
            }}
          >
            Back{" "}
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: Dark,
              color: "white",
              padding: ButtonPadding,
              "&:hover":ButtonHover
            }}
          >
            Export
          </Button>
        </Box>
      </TableContainer>
    </div>
  );
};
