import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";

import { Logins, profile } from "../../assets";
import { SideNav } from "../SideNav";
import zIndex from "@mui/material/styles/zIndex";
import { Dark } from "../../utils";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            mr: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor:"pointer"
            }}
            onClick={()=> navigate("/customerData")}
          >
            <SideNav role={"user"} />

            <img
              src={Logins}
              alt="image"
              style={{ width: "70px", height: "70px" }}
            />
          </Box>
          <Box
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: Dark,
                letterSpacing: { lg: "4px", xl: "4px", md: "3px", sm: "0px" },
                fontFamily: "Monospace",
                fontSize: {
                  lg: "40px",
                  xl: "40px",
                  md: "32px",
                  sm: "30px",
                  xs: "18px",
                },
              }}
            >
              Syed Brothers(BOQ)
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={profile}
                  sx={{ border: "1px solid #26255f" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
