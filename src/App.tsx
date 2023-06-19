import { AddNew, Login, NavBar, UploadFile } from "./components";
import { Box } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomerData } from "./components/CustomerData";
import { SideNav } from "./components/SideNav";

function App() {
  const navLinks = [
    { label: "Dashboard", path: "/dashboard", roles: ["admin", "user"] },
    { label: "Profile", path: "/profile", roles: ["admin", "user"] },
    { label: "Admin Panel", path: "/login", roles: ["admin"] },
  ];

  const [filteredNavLinks, setFilteredNavLinks] = useState<object[]>([]);
  const [userRole, setUserRole] = useState<any>("admin");

  useEffect(() => {
    const temp = navLinks.filter((link) => link.roles.includes(userRole));
    console.log(temp, "value of temp");
    setFilteredNavLinks(temp);
  }, [userRole]);

  useEffect(() => {
    console.log(filteredNavLinks, "filtered");
  }, [filteredNavLinks]);
  return (
    <>
      {filteredNavLinks.length > 0 && <SideNav links={filteredNavLinks} />}

      <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="/dashboard" element={<UploadFile />} />
        <Route path="/profile" element={<CustomerData />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
