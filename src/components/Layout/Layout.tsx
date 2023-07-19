import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { NavBar } from "../NavBar";
import { bg } from "../../assets/jpg";
type DefaultLayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box
      // sx={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "100vh",
      //   backgroundSize: "cover",
      //   position: "relative",
      //   zIndex: 0,
      //   "&::before": {
      //     content: '""',
      //     position: "absolute",
      //     top: 0,
      //     left: 0,
      //     width: "100%",
      //     minHeight: "100%",
      //     background: "rgba(255,255,255,0.4)",
      //     zIndex: -1,
      //   },
      // }}
    >
      <NavBar />
      {children}
    </Box>
  );
};
