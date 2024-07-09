"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InsightsIcon from "@mui/icons-material/Insights";
import InstagramSearchResult from "../Search/searchTemplate";
import SearchResultsList from "../searchResults/searchResult";
import SearchResultsInstagram from "../searchResults/searchResult";
import SearchResultsListYouTube from "../searchResults/searchResultYoutube";
import SearchResultsListTwitter from "../searchResults/searchResultstwitter";
import SearchResultsListFacebook from "../searchResults/searchResultsFacebook";
import ChartsBar from "../charts/barChat";
import InsightsSidebar from "../sidebar/InsightsBar";
import PieArcLabel from "../charts/PiChat";
import { Grid, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable" // Makes the tabs scrollable on smaller screens
          scrollButtons="auto" // Automatically show scroll buttons on smaller screens
          allowScrollButtonsMobile
        >
          <Tab
            icon={<InstagramIcon />}
            label="Instagram"
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            icon={<XIcon />}
            label="Twitter"
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            icon={<FacebookIcon />}
            label="Facebook"
            iconPosition="start"
            {...a11yProps(2)}
          />
          <Tab
            icon={<YouTubeIcon />}
            label="Youtube"
            iconPosition="start"
            {...a11yProps(3)}
          />
          <Tab
            icon={<InsightsIcon />}
            label="Insights"
            iconPosition="start"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SearchResultsInstagram />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SearchResultsListTwitter />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SearchResultsListFacebook />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SearchResultsListYouTube />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
          }}
        >
          <InsightsSidebar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box sx={{ flex: 1, marginBottom: 2 }}>
              <ChartsBar />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: "center" }}>
                    <PieArcLabel textPosition="above" label="Facebook" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: "center" }}>
                    <PieArcLabel textPosition="above" label="Twitter" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: "center" }}>
                    <PieArcLabel textPosition="above" label="Instagram" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: "center" }}>
                    <PieArcLabel textPosition="above" label="YouTube" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
