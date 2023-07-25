import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useTranslation } from "react-i18next";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, Box, Typography } from "@mui/material";
import { ButtonHover, ButtonPadding, Dark } from "../../utils";
import { Logins } from "../../assets";

export const FileViewDialog = ({ close, data }: any) => {
  const { t } = useTranslation();
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
    createData(1, t("Bricks"), t("No's"), data?.bricks || 0, 16.5, 4.0),
    createData(1, t("Sand"), t("CFT"), data?.sand || 0, 62, 4.3),
    createData(1, t("Cement"), t("Bags"), data?.cement || 0, 1150, 6.0),
    createData(1, t("Crush"), t("CFT"), 3.7, 133, 4.3),
    createData(1, t("Bajar"), t("CFT"), data?.bajar || 0, 95, 3.9),
    createData(1, t("Ghasu"), t("CFT"), 16.0, 28, 3.9),
    createData(1, t("Steel"), t("Kg"), 16.0, 260, 3.9),
    createData(1, t("Membrane Sheet"), t("Sft"), 16.0, 90, 3.9),
    createData(1, t("Termite"), t("Sft"), 16.0, 11500, 3.9),
  ];
  return (
    <Box>
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
            {t("View Report")}
          </Typography>
        </Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{t("S.No")}</StyledTableCell>
              <StyledTableCell align="left">{t("Description")}</StyledTableCell>
              <StyledTableCell align="left">{t("Unit")}</StyledTableCell>
              <StyledTableCell align="left">{t("Quantity")}</StyledTableCell>
              <StyledTableCell align="left">{t("Rate")}</StyledTableCell>
              <StyledTableCell align="left">{t("Amount")}</StyledTableCell>
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
              "&:hover": ButtonHover,
            }}
          >
            {t("BACK")}
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: Dark,
              color: "white",
              padding: ButtonPadding,
              "&:hover": ButtonHover,
            }}
          >
            {t("EXPORT")}
          </Button>
        </Box>
      </TableContainer>
    </Box>
  );
};
