import styled from "@emotion/styled";
import { TableCell, TableRow, TextField, Typography, tableCellClasses } from "@mui/material";

export const Body = "#f3f9fb";
export const Primary = "#87c0cd";
export const Secondary = "#226597";
export const Dark = "#113f67";

export const H1 = styled(Typography)({
  fontSize: "30px",
  lineHeight: "40px",
});

export const H2 = styled(Typography)({
  fontSize: "18px",
  lineHeight: "25px",
});

export const H3 = styled(Typography)({
  fontSize:"16px",
  lineHeight: "22px",
});
export const ContainerPadding = "1.6rem 1.2rem";
export const ButtonPadding = {
  xl: "8px 20px",
  lg: "6px 18px",
  md: "6px 16px ",
  sm: "6px  14px",
  xs: "4px 12px",
};

export const ButtonHover = {
  color:Dark 
}

export const CssTextField = styled(TextField)({
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

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //   backgroundColor: Dark,
  //   color: theme.palette.common.white,
  // },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));