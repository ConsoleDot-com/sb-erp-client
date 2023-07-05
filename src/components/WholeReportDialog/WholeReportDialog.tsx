import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
import { useTranslation } from "react-i18next";
import { ButtonHover, ButtonPadding, Dark } from "../../utils";
import { Logins } from "../../assets";
import { useEffect } from "react";

export const WholeReportDialog = ({ close }: any) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
=======
import { Dark } from "../../utils";
import { useEffect, useState } from "react";

export const WholeReportDialog = ({ finalData }: any) => {
  const navigate = useNavigate();
>>>>>>> Stashed changes
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
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
  }));

  function createData(
    id: number,
    description: string,
    unit: string,
<<<<<<< Updated upstream
    quantity: number,
=======
    quantity: any,
>>>>>>> Stashed changes
    rate: number,
    amount: number
  ) {
    return { id, description, unit, quantity, rate, amount };
  }

<<<<<<< Updated upstream
  const rows = [
    createData(1, t("Bricks"), t("No's"), 0, 24, 4.0),
    createData(1, t("Sand"), t("CFT"), 0, 37, 4.3),
    createData(1, t("Cement"), t("Bags"), 0, 24, 6.0),
    createData(1, t("Crush"), t("CFT"), 3.7, 67, 4.3),
    createData(1, t("Bajar"), t("CFT"), 0, 49, 3.9),
    createData(1, t("Ghasu"), t("CFT"), 16.0, 49, 3.9),
    createData(1, t("Steel"), t("Kg"), 16.0, 49, 3.9),
    createData(1, t("Membrane Sheet"), t("Sft"), 16.0, 49, 3.9),
  ];
  useEffect(() => {
    console.log(typeof close);
  });
=======
  console.log(finalData?.finalBrick, "finalBrick");
  console.log(finalData?.finalSand, "finalSand");
  console.log(finalData?.finalCement, "finalCement");
  console.log(finalData?.finalBajar, "finalBajar");
  const [rows, setRows] = useState<any[]>([]);
  function generateData() {
    setRows([
      createData(
        1,
        "Bricks",
        "No's",
        Math.ceil(finalData?.finalBrick) || 0,
        24,
        4.0
      ),
      createData(
        1,
        "Sand",
        "No's",
        Math.ceil(finalData?.finalSand) || 0,
        37,
        4.3
      ),
      createData(
        1,
        "Cement",
        "No's",
        Math.ceil(finalData?.finalCement) || 0,
        24,
        6.0
      ),
      createData(1, "Crush", "No's", 3.7, 67, 4.3),
      createData(
        1,
        "Bajar",
        "No's",
        Math.ceil(finalData?.finalBajar) || 0,
        49,
        3.9
      ),
      createData(1, "Ghausa", "No's", 16.0, 49, 3.9),
      createData(1, "Steel", "No's", 16.0, 49, 3.9),
      createData(1, "Membrane Sheet", "No's", 16.0, 49, 3.9),
    ]);
  }
  useEffect(() => {
    setRows([]);
    generateData();
    console.log(finalData, "debug")
  }, [finalData]);
>>>>>>> Stashed changes
  return (
    <>
      <div>
        <TableContainer component={Paper}>
<<<<<<< Updated upstream
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
              {t("Complete Report")}
            </Typography>
          </Box>
=======
          <Typography
            sx={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "bold",
              padding: "10px 0",
              letterSpacing: "5px",
              color: Dark,
            }}
          >
            Complete Report
          </Typography>
>>>>>>> Stashed changes
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S.No</StyledTableCell>
<<<<<<< Updated upstream
                <StyledTableCell align="left">
                  {t("Description")}
                </StyledTableCell>
                <StyledTableCell align="left">{t("Unit")}</StyledTableCell>
                <StyledTableCell align="left">{t("Quantity")}</StyledTableCell>
                <StyledTableCell align="left">{t("Rate")}</StyledTableCell>
                <StyledTableCell align="left">{t("Amount")}</StyledTableCell>
=======
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Unit</StyledTableCell>
                <StyledTableCell align="left">Quantity</StyledTableCell>
                <StyledTableCell align="left">Rate</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
            <Button onClick={() => navigate("/uploadData")} variant="outlined">
              Back{" "}
            </Button>
            <Button variant="outlined">Export</Button>
>>>>>>> Stashed changes
          </Box>
        </TableContainer>
      </div>
    </>
  );
};
