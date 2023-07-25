import {
  AddNew,
  Login,
  NavBar,
  SlabSteelCalculator,
  SteelData,
  UploadFile,
  WholeReportDialog,
} from "./components";
import { Box } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomerData } from "./components/CustomerData";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* Render other components */}
        <Route path="/" element={<Login />} />

        <Route path="/uploadData" element={<UploadFile />} />
        <Route path="/customerData" element={<CustomerData />} />
        {/* <Route path="/wholereport" element={<WholeReportDialog/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/steel" element={<SlabSteelCalculator/>} />
        <Route path="/enterSteelData" element={<SteelData/>} />

      </Routes>
    </>
  );
}

export default App;
