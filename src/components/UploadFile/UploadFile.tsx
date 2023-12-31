import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { FloorFiles } from "./FloorFiles";
import { SlabFiles } from "./SlabFiles";
import { Layout } from "../Layout/Layout";
import { Dark } from "../../utils";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
// style for the tab and tabs
const StyleTab = styled(Tab)({
  color: "rgba(225, 230, 241, 1)",
  padding: "10px",
  backgroundColor: Dark,
  borderRadius: "8px",
  margin: "10px",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(104, 104, 158, 0.32)",
  },
});
const StyledTabs = styled(Tabs)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "100%", overflow: "hidden", overflowY: "scroll", height: 'calc(100vh - 70px)' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const UploadFile = () => {
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight - 70);
  };

  useEffect(() => {
    // Add event listener to update screen height when the window is resized
    window.addEventListener("resize", updateScreenHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <StyledTabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                height: 'calc(100vh - 70px)',
                backgroundColor: "#464496",
                color: "white",
              }}
            >
              <StyleTab label="Item One" {...a11yProps(0)} />
              <StyleTab label="Item Two" {...a11yProps(1)} />
              <StyleTab label="Item Three" {...a11yProps(2)} />
              <StyleTab label="Item Four" {...a11yProps(3)} />
              <StyleTab label="Item Five" {...a11yProps(4)} />
              <StyleTab label="Item Six" {...a11yProps(5)} />
              <StyleTab label="Item Seven" {...a11yProps(6)} />
            </StyledTabs>
          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
                width: "100%",
              }}
            >
              <TabPanel value={value} index={0}>
                <FloorFiles />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SlabFiles />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>
            </Box>
          </Grid>

          <Box mt={3}></Box>
        </Grid>
      </Box>
    </Layout>
  );
};
