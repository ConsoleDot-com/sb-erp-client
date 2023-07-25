import { Box, Container, Button, Typography, Grid } from "@mui/material";
import { AddNew } from "../../AddNew";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  ButtonPadding,
  Dark,
  H1,
  H2,
  Primary,
  Secondary,
} from "../../../utils";
import { useTranslation } from "react-i18next";
import { Layout } from "../../Layout/Layout";
import { FileViewDialog } from "../../FileViewDialog";
import { WholeReportDialog } from "../../WholeReportDialog";
import React from "react";

export const FloorFiles = () => {
  const [isFileUploaded, setIsFileUploaded] = useState<any>(false);
  const [finalData, setFinalData] = useState<any>({
    finalBrick: 0,
    finalSand: 0,
    finalCement: 0,
    finalBajar: 0,
  });
  console.log(isFileUploaded, "file");
  const { t } = useTranslation();
  const [levels, setLevels] = useState(
    new Array(
      parseInt(window.location.search.split("?").join("").split("=")[1])
    ).fill("HI")
  );
  //   const [basement, setBasement] = useState(
  //     JSON.parse(window.location.search.split("?").join("").split("=")[2])
  //   );
  // const [basement, setBasement] = useState<boolean>(window.location.search.split("=")[1].split("=")[1]);
  const [reportOpen, setReportOpen] = useState(false);
  const [open, setOpen] = useState(false);
  //   const [addComponent, setAddComponent] = useState<any[]>([]);
  //   const [data, setData] = useState<any>({});
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);

  const [myDataArr, setMyDataArr] = useState<any[]>([]);
  console.log(myDataArr);
  const setDataValue = (index: number, data: any) => {
    let temp: any[];
    if (index < myDataArr.length - 1) {
      temp = [
        ...myDataArr.slice(0, index),
        data,
        ...myDataArr.slice(index + 1, myDataArr.length - 1),
      ];
    } else {
      temp = [...myDataArr];
      temp.push(data);
    }
    setMyDataArr([...temp]);
    setCurrIndex(currIndex + 1);
  };

  const finalValues = () => {
    let bricks = 0;
    let sand = 0;
    let cement = 0;
    let bajar = 0;
    [...myDataArr].map((i) => {
      setFinalData({
        ...finalData,
        finalBrick: bricks + i.bricks,
        finalSand: sand + i.sand,
        finalCement: cement + i.cement,
        finalBajar: bajar + i.bajar,
      });
      bricks += i.bricks;
      sand += i.sand;
      cement += i.cement;
      bajar += i.bajar;
    });
    setReportOpen(true);
  };

  return (
    <Box
      sx={{
        border: "none",
        padding: "10px",
        borderRadius: "8px solid white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);",
      }}
    >
      <Grid container>
        <Box mt={3}>
          <H1 sx={{ textAlign: "center", color: Dark, fontWeight: "bold" }}>
            {t("Upload Floor File")}
          </H1>
          <Typography sx={{ textAlign: "center", mt: 3 }}>
            <i>
              {" "}
              {t(
                "Upload only XLS files.Include accurate and complete tabular data.Use a single sheet with clear column headers.Avoid merged cells, special characters, and formulas.Check the file size (max 10 MB) and compress if needed.Remove sensitive information before uploading.Zip multiple XLS files into one, if applicable.Double-check the file's content for accuracy."
              )}
            </i>
          </Typography>
          {/* compnents are being maped here */}
          {levels.map((i: any, index: number) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 3,
                  flexDirection: {
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  },
                  rowGap: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                  key={index}
                >
                  <AddNew
                    setDataValue={setDataValue}
                    index={index}
                    setIsFileUploaded={setIsFileUploaded}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {isFileUploaded && (
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#26255f",
                        color: "white",
                        padding: ButtonPadding,
                        "&:hover": {
                          bgcolor: Dark,
                        },
                      }}
                      onClick={() => {
                        setDisplayIndex(index);
                        setOpen(true);
                      }}
                    >
                      {t("View")}
                    </Button>
                  )}
                </Box>
              </Box>
            </React.Fragment>
          ))}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1rem",
              marginBottom: "16px",
              justifyContent: {
                xl: "flex-start",
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Button
              onClick={() => {
                finalValues();
              }}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#26255f",
                color: "white",
                padding: ButtonPadding,

                "&:hover": {
                  backgroundColor: Dark,
                  color: "white",
                },
              }}
            >
              {t("Whole Report")}
            </Button>
          </Box>

          <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
            <FileViewDialog
              data={myDataArr[displayIndex]}
              close={() => setOpen(false)}
            />
          </Dialog>
          <Dialog
            fullScreen
            open={reportOpen}
            onClose={() => setReportOpen(false)}
          >
            <WholeReportDialog
              finalData={finalData}
              onClose={() => setReportOpen(false)}
            />
          </Dialog>
        </Box>
      </Grid>
    </Box>
  );
};
