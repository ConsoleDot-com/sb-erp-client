import { Box, Container, Button, Typography } from "@mui/material";
import { AddNew } from "../AddNew";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { ButtonPadding, Dark, H1, Secondary } from "../../utils";
import { useTranslation } from "react-i18next";
import { Layout } from "../Layout/Layout";
import { FileViewDialog } from "../FileViewDialog";
import { useNavigate } from "react-router-dom";
import { WholeReportDialog } from "../WholeReportDialog";
import React from "react";

export const UploadFile = () => {
  const [isFileUploaded, setIsFileUploaded] = useState<any>(false);
  const [finalData, setFinalData] = useState<any>({
    finalBrick: 0,
    finalSand: 0,
    finalCement: 0,
    finalBajar: 0,
  });
  console.log(isFileUploaded, "file");
  const { t } = useTranslation();
  const [reportOpen, setReportOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [addComponent, setAddComponent] = useState<any[]>([]);
  const [data, setData] = useState<any>({});
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  // calling function onDelete and splicing it with 1
  const onDelete = (index: number) => {
    const newState = [...addComponent];
    newState.splice(index, 1);
    setAddComponent([...newState]);

    const newData = [...myDataArr];
    newData.splice(index + 1, 1);
    setMyDataArr(newData);
  };
  const [myDataArr, setMyDataArr] = useState<any[]>([]);
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
  };

  // console.log(finalBrick, "finalBrick");
  // console.log(finalSand, "finalSand");
  // console.log(finalCement, "finalCement");
  // console.log(finalBajar, "finalBajar");
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
  const navigate = useNavigate();
  return (
    <Layout>
      <Box>
        <Container>
          <Box mt={3}>
            <H1 sx={{ textAlign: "center", color: Dark }}>
              {t("Upload Your File")}
            </H1>
            <Typography sx={{ textAlign: "center" }}>
              {t(
                "Upload only XLS files.Include accurate and complete tabular data.Use a single sheet with clear column headers.Avoid merged cells, special characters, and formulas.Check the file size (max 10 MB) and compress if needed.Remove sensitive information before uploading.Zip multiple XLS files into one, if applicable.Double-check the file's content for accuracy."
              )}
            </Typography>
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
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <AddNew
                  setDataValue={setDataValue}
                  index={currIndex}
                  setIsFileUploaded={setIsFileUploaded}
                />
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
                      setDisplayIndex(0);
                      setOpen(true);
                    }}
                  >
                    {t("View")}
                  </Button>
                )}

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
                  >
                    {t("Delete")}
                  </Button>
                )}
              </Box>
            </Box>
            {/* compnents are being maped here */}
            {addComponent.map((component: any, index: number) => (
              <React.Fragment key={index.toString()}>
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
                      width: {
                        xl: "50%",
                        lg: "50%",
                        md: "50%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    key={index}
                  >
                    {component}
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
                          setDisplayIndex(index + 1);
                          setOpen(true);
                        }}
                      >
                        {t("    View")}
                      </Button>
                    )}
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
                        onClick={() => onDelete(index)}
                      >
                        {t("  Delete")}
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
                sx={{
                  mt: 3,
                  backgroundColor: "#26255f",
                  color: "white",
                  padding: ButtonPadding,
                  "&:hover": {
                    backgroundColor: Dark,
                    color: "white",
                  },
                }}
                onClick={() => addNewComponent()}
              >
                {t("Add")}
              </Button>
              {/* conditional rendring of button when user adds more than 1 files  */}
              {addComponent?.length > 0 && (
                <Button
                  onClick={() => {
                    finalValues();
                  }}
                  sx={{
                    mt: 3,
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
              )}
            </Box>
          </Box>
        </Container>
      </Box>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <FileViewDialog
          data={myDataArr[displayIndex]}
          close={() => setOpen(false)}
        />
      </Dialog>
      <Dialog fullScreen open={reportOpen} onClose={() => setReportOpen(false)}>
        <WholeReportDialog finalData={finalData} />
      </Dialog>
    </Layout>
  );
};
