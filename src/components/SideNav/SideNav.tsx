import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Secondary } from "../../utils";
export const A = styled("a")({
  padding: "8px , 8px , 8px, 32px",
  textDecoration: "none",
  display: "block",
  transition: "0.3s",
  marginBottom: "1rem",
  color: "white",
  "&:last-child": {
    marginBottom: "0",
  },
  "&:hover": {
    color: "#f1f1f1",
  },
});


export const SideNav = ({ links }: any) => {
console.log(links , 'links')

  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen); // toggling the nav
  };
    // useEffect(() => {
    //   const handleOutsideClick = (event:any) => {
    //     if (sideNavRef.current && !sideNavRef.current?.contains(event.target)) {
    //       setIsOpen(false);
    //     }
    //   };

    //   document.addEventListener("click", handleOutsideClick);

    //   return () => {
    //     document.removeEventListener("click", handleOutsideClick);
    //   };
    // }, []);
  interface Test {
    path: string;
    label: string;
    roles: string[];
  }
  return (
    <>
      <div
        id="mySidenav"
        ref={sideNavRef}
        style={{
          height: "100%",
          width: isOpen ? "300px" : "0",
          position: "fixed",
          zIndex: "2",
          top: 0,
          left: 0,
          backgroundColor: Secondary,
          overflowX: "hidden",

          transition: "0.5s",
        }}
      >
        <Box sx={{ padding: "1rem 2rem" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/" onClick={handleToggle}>
              <CloseIcon />
            </a>
          </Box>
          <div>
            {links?.map((link: any) => (
              <Link to={link?.path}>{link?.label}</Link>
            ))}
          </div>
        </Box>
      </div>
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={handleToggle}
      >
        <MenuIcon />
      </span>
    </>
  );
};
