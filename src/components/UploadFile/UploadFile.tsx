import { Box, Container, Button } from "@mui/material";
import { AddNew } from "../AddNew";
import { useState } from "react";

import { Dark, H1, Secondary } from "../../utils";
import { useTranslation } from "react-i18next";
import { Layout } from "../Layout/Layout";

export const UploadFile = () => {
  const { t } = useTranslation();
  const [addComponent, setAddComponent] = useState<any[]>([]);

  const onDelete = (index: number) => {
    const newState = [...addComponent];

    newState.splice(index, 1);

    setAddComponent(newState);
  };
  const addNewComponent = () => {
    let tempComponent = <AddNew />;
    setAddComponent((addComponent) => [...addComponent, tempComponent]);
  };
  return (
    <Layout>
      <Box>
        <Container>
          <Box>
            <H1 sx={{ textAlign: "center", color: Dark }}>
              {t("Upload Your File")}
            </H1>
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
                        color: "white",
                        backgroundColor: Secondary,

                        "&:hover": {
                          backgroundColor: Dark,
                          color: "white",
                        },
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        backgroundColor: Secondary,
                        "&:hover": {
                          backgroundColor: Dark,
                          color: "white",
                        },
                      }}
                      onClick={() => onDelete(index)}
                    >
                      Delete
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
                Add
              </Button>
              {addComponent?.length > 1 && (
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
                  Whole Report
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
