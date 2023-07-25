import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Secondary } from "../../utils";

// styling it as component
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
// styling as css-in-js
const StyledLink = styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  margin-bottom: 1rem;
  color: black;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #f1f1f1;
  }
`;

export const SideNav = ({ role }: any) => {
  const navLinks = [
    { label: "UploadData", path: "/uploadData", roles: ["admin", "user"] },
    { label: "CustomerData", path: "/customerData", roles: ["admin", "user"] },
    { label: "Admin", path: "/login", roles: ["admin"] },
  ];

  const [filteredNavLinks, setFilteredNavLinks] = useState<object[]>([]);
  const [userRole, setUserRole] = useState<string>("");

  //filtering the links by the role of the user

  useEffect(() => {
    // on mount and on ready it'll filter the options on passed role to side nav component
    const temp = navLinks.filter((link) => link.roles.includes(role));
    // setting the filtered roles in state
    setFilteredNavLinks(temp);
  }, [userRole]);

  // toggling the nav

  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  // make the nav disappear on click
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (event.clientX > 300) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
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
            <a href="#" onClick={handleToggle}>
              <CloseIcon
                sx={{ color: "white", width: "30px", height: "30px" }}
              />
            </a>
          </Box>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* maping the filtered array */}
            {filteredNavLinks?.map((link: any) => (
              <StyledLink
                style={{
                  marginBottom: "10px",
                  textDecoration: "none",
                }}
                to={link?.path}
              >
                {link?.label}
              </StyledLink>
            ))}
          </div>
        </Box>
      </div>
    </>
  );
};
