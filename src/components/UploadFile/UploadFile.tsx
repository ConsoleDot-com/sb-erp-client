import { Box, Container, Button } from "@mui/material";
import { AddNew } from "../AddNew";
import { useState } from "react";
import { CustomerData } from "../CustomerData";
import { H1 } from "../../utils";
import { useTranslation } from "react-i18next";
import { SideNav } from "../SideNav";

export const UploadFile = () => {
  const { t } = useTranslation();
  const [addComponent, setAddComponent] = useState<any[]>([]);

  const onDelete = (index: number) => {
    console.log(index, "index");
    const newState = [...addComponent];
    newState.splice(index, 1);
    setAddComponent(newState);
  };
  const addNewComponent = () => {
    let tempComponent = (
      <AddNew onDelete={() => onDelete(addComponent.length)} />
    );
    setAddComponent((prevState) => [...prevState, tempComponent]);
  };
  return (
    <Box>
      <Container>
        {/* <SideNav /> */}
        <H1>{t("Upload Your File")}</H1>
        {addComponent.map((component: any, index: number) => (
          <Box key={index.toString()}>{component}</Box>
        ))}

        <Button variant="contained" onClick={() => addNewComponent()}>
          Add
        </Button>
      </Container>
      <CustomerData />
    </Box>
  );
};
