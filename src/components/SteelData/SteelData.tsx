import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Layout } from "../Layout/Layout";
import { Dark } from "../../utils";
import { BeemDialog } from "../BeemDialog";
import { LintelBeem } from "../LintelBeem";
import { BasementWall } from "../BasementWall";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled(Tab)(({ theme }) => ({
    color: "rgba(225, 230, 241, 1)",
    padding: "10px",
    backgroundColor: Dark,
    borderRadius: "8px",
    margin: "10px",
    position: 'relative',
    "&::before, &::after": {
      content: '""',
      position: 'absolute',
      bottom: 0,
      height: 3,
      width: 0,
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.2s ease-in-out',
    },
    "&::before": {
      left: '50%',
    },
    "&::after": {
      right: '50%',
    },
    "&:hover::before, &:hover::after": {
      width: '50%',
    },
    "&.Mui-selected": {
      color: "#fff",
      "&::before, &::after": {
        width: '50%',
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(104, 104, 158, 0.32)",
    },
  }));
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
      style={{ width: "100%" }}
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

export const SteelData = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid sx={{ "& button": {} }} item xl={2} lg={2} md={2} sm={2} xs={2}>
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
                overflow: 'hidden',
                overflowY: 'scroll',
                backgroundColor: Dark,
                color: "white",
              }}
            >
              <StyledTab label="Beams" {...a11yProps(0)} />
              <StyledTab label="Lental Beams" {...a11yProps(1)} />
              <StyledTab label="CB" {...a11yProps(2)} />
              <StyledTab label="RB" {...a11yProps(3)} />
              <StyledTab label="Basement Wall" {...a11yProps(4)} />
              <StyledTab label="Item Six" {...a11yProps(5)} />
              <StyledTab label="Item Seven" {...a11yProps(6)} />
            </StyledTabs>
          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
              }}
            >
              <TabPanel value={value} index={0}>
                <BeemDialog />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LintelBeem />
              </TabPanel>
              <TabPanel value={value} index={2}>
                CB
              </TabPanel>
              <TabPanel value={value} index={3}>
                RB
              </TabPanel>
              <TabPanel value={value} index={4}>
                <BasementWall />
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
