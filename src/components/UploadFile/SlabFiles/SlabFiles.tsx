import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Container, Button, Typography, Grid } from "@mui/material";
import { AddNew } from "../../AddNew";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { ButtonPadding, Dark, H1, H2 } from "../../../utils";
import { useTranslation } from "react-i18next";
import { Layout } from "../../Layout/Layout";
import { FileViewDialog } from "../../FileViewDialog";
import { WholeReportDialog } from "../../WholeReportDialog";

export const SlabFiles = () => {
  const [isFileUploaded, setIsFileUploaded] = useState<any>(false);
  console.log(isFileUploaded, "file");
  const { t } = useTranslation();
  const [levels, setLevels] = useState(
    new Array(
      parseInt(window.location.search.split("?").join("").split("=")[1])
    ).fill("HI")
  );
  const [basement, setBasement] = useState(
    JSON.parse(window.location.search.split("?").join("").split("=")[2])
  );
  // const [basement, setBasement] = useState<boolean>(window.location.search.split("=")[1].split("=")[1]);
  const [reportOpen, setReportOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [addComponent, setAddComponent] = useState<any[]>([]);
  const [data, setData] = useState<any>({});
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);

  // calling function onDelete and splicing it with 1
  // const onDelete = (index: number) => {
  //   const newState = [...addComponent];
  //   newState.splice(index, 1);
  //   setAddComponent([...newState]);

  //   const newData = [...myDataArr];
  //   newData.splice(index + 1, 1);
  //   setMyDataArr(newData);
  // };
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

  // Navigate to steel data
  const navigate = useNavigate();
  function handleClickSteel() {
    navigate("/enterSteelData");
  }

  const addNewComponent = () => {
    // every time on click to add adding a component to the state and displaying it using map in template
    const temp = [...addComponent];
    temp.push(
      <AddNew
        setDataValue={setDataValue}
        index={currIndex}
        setIsFileUploaded={setIsFileUploaded}
      />
    );
    setAddComponent([...temp]);
    // setAddComponent((prevValue) => [
    //   ...prevValue,
    //   <AddNew setData={setData} setIsFileUploaded={setIsFileUploaded}/>,
    // ]);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Box
          mt={3}
          sx={{
            width: "100%",
            border: "none",
            padding: "10px",
            borderRadius: "8px solid white",
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);",
          }}
        >
          <H1
            sx={{
              textAlign: "center",
              color: Dark,
              fontWeight: "bold",
              mb: 3,
            }}
          >
            {t("Upload Slab File")}
          </H1>

          {levels
            .slice(0, !basement ? levels.length - 1 : levels.length)
            .map((i: any, index: number) => (
              <React.Fragment key={index.toString()}>
                <Box
                  sx={{
                    padding: "16px 0",
                    mb: 4,
                    width: "100%",
                  }}
                >
                  <H2
                    sx={{
                      borderRadius: "16px",
                      textAlign: "center",
                    }}
                  >
                    Slab {index + 1}
                  </H2>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
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
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <AddNew
                        setDataValue={setDataValue}
                        index={index}
                        setIsFileUploaded={setIsFileUploaded}
                      />
                      <Box sx={{ display: "flex", columnGap: "1rem", mt: 2 }}>
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
                            onClick={handleClickSteel}
                          >
                            {t("Enter Steel Details")}
                          </Button>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        width: {
                          xl: "50%",
                          lg: "50%",
                          md: "50%",
                          sm: "100%",
                          xs: "100%",
                        },
                        justifyContent: "flex-end",
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
          {/* <Dialog fullScreen open={reportOpen} onClose={() => setReportOpen(false)}>
        <WholeReportDialog
          finalData={finalData}
          onClose={() => setReportOpen(false)}
        />
      </Dialog> */}
        </Box>
      </Grid>
    </Box>
  );
};
