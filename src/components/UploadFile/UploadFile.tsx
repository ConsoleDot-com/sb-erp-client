import { Box, Container, Button } from "@mui/material";
import { AddNew } from "../AddNew";
import { useState } from "react";

import { Dark, H1, Secondary } from "../../utils";
import { useTranslation } from "react-i18next";
import { Layout } from "../Layout/Layout";

export const UploadFile = () => {
  const { t } = useTranslation();
  const [addComponent, setAddComponent] = useState<any[]>([]);
  // calling function onDelete and splicing it with 1
  const onDelete = (index: number) => {
    const newState = [...addComponent];

    newState.splice(index, 1);

    setAddComponent(newState);
  };

  const addNewComponent = () => {
    // every time on click to add adding a component to the state and displaying it using map in template
    let tempComponent = <AddNew />;
    setAddComponent((addComponent) => [...addComponent, tempComponent]);
  };
  return (
    <Layout>
      <Box>
        <Container>
          <Box mt={3}>
            <H1 sx={{ textAlign: "center", color: Dark }}>
              {t("Upload Your File")}
            </H1>
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
                <AddNew />
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
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#26255f",
                    color: "white",
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: Dark,
                    },
                  }}
                >
                  {t("View")}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#26255f",
                    color: "white",
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: Dark,
                    },
                  }}
                >
                  {t("Delete")}
                </Button>
              </Box>
            </Box>
            {/* compnents are being maped here */}
            {addComponent.map((component: any, index: number) => (
              <>
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
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#26255f",
                        color: "white",
                        padding: "10px 20px",
                        "&:hover": {
                          bgcolor: Dark,
                        },
                      }}
                    >
                      {t("    View")}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#26255f",
                        color: "white",
                        padding: "10px 20px",
                        "&:hover": {
                          bgcolor: Dark,
                        },
                      }}
                      onClick={() => onDelete(index)}
                    >
                      {t("  Delete")}
                    </Button>
                  </Box>
                </Box>
              </>
            ))}
            <Box sx={{ width: "100%", display: "flex", gap: "1rem" }}>
              <Button
                sx={{
                  mt: 3,
                  backgroundColor: "#26255f",
                  color: "white",

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
                  sx={{
                    mt: 3,
                    backgroundColor: "#26255f",
                    color: "white",

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
    </Layout>
  );
};
