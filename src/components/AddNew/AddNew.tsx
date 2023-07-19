import styled from "@emotion/styled";
import { Box, Container, Button } from "@mui/material";
import { Dark, Secondary, wallReader } from "../../utils";
import { foundationReader } from "../../utils";
import * as xlsx from "xlsx";

import { useEffect, useState } from "react";
import { UploadFile } from "../UploadFile";
import { AnyMxRecord } from "dns";
export const Input = styled("input")({
  // width: "300px",
  maxWidth: "100%",
  color: "#444",
  background: " #fff",
  borderRadius: "8px",
  border: "1px solid #555",
  height: "2rem",
  "&::file-selector-button": {
    marginRight: " 20px",
    border: "none",
    background: "#26255f",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    height: "2rem",
    padding: "10px 20px",
    transition: "background .2s ease-in-out",
  },
  "&::file-selector-button:hover": {
    color: "black",
    background: "white",
  },
  " &:hover": {
    background: "#ddd",
    color: "white",
  },
});

export const AddNew = ({ index, setDataValue, setIsFileUploaded }: any) => {
  const [file, setFile] = useState<any>(null);
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const floorData = xlsx.utils.sheet_to_json(worksheet);
        if (
          fileName.split(".")[0] == "GroundFloor" ||
          fileName.split(".")[0] == "SecondFloor" ||
          fileName.split(".")[0] == "FirstFloor"
        ) {
          // setData({ ...wallReader(floorData) });
          setDataValue(index, {
            ...wallReader(floorData),
          });

        } else if (fileName.split(".")[0] == "Foundation") {
          // setData({ ...foundationReader(floorData) });
          setDataValue(index, {
            ...foundationReader(floorData),
          });
        } else {
          alert("wrong input");
        }
        console.log(floorData.length, "floorData.length")
        if(floorData.length>0){
          setIsFileUploaded(true);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return (
    <Box mt={2}>
      <Box mr={3}>
        <Input
          style={{
            width: "100%",
            padding: "10px 10px",
            
          }}
          type="file"
          // accept="image/*"
          onChange={(e: any) => {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
          }}
        />
      </Box>
    </Box>
  );
};
