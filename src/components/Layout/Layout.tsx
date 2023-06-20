import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { NavBar } from "../NavBar";
type DefaultLayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};
