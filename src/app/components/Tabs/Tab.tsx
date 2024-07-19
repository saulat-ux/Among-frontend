// @ts-nocheck
"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { useSelector } from "react-redux";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InsightsIcon from "@mui/icons-material/Insights";

import SearchResultsList from "../searchResults/searchResultsInstagram";
import SearchResultsInstagram from "../searchResults/searchResultsInstagram";
import SearchResultsListYouTube from "../searchResults/searchResultYoutube";
import SearchResultsListTwitter from "../searchResults/searchResultstwitter";
import SearchResultsListFacebook from "../searchResults/searchResultsFacebook";
import ChartsBar from "../charts/barChat";
import InsightsSidebar from "../sidebar/InsightsBar";
import { useSearchParams } from "next/navigation";
import PieArcLabel from "../charts/PiChat";
import { Grid, Typography } from "@mui/material";
import { RootState } from "@/app/lib/store/store";
import VideoList from "../searchResults/YoutubeSearchTemplate";
import YoutubeSearchTemplate from "../searchResults/YoutubeSearchTemplate";
import FacebookSearchTemplate from "../searchResults/FacebookSearchTemplate";

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
  const location = useSelector((state: RootState) => state.location);
  const searchParams = useSearchParams();
  const [results, setResults] = React.useState([]);
  const [fbResults, setFbResults] = React.useState([]);
  const [instaResults, setInstaResults] = React.useState([]);
  const [xResults, setXResults] = React.useState([]);
  const [ytResults, setYtResults] = React.useState([]);

  const [value, setValue] = React.useState(0);
  // console.log("the query in search results", search);

  React.useEffect(() => {
    const search = searchParams.get("query");
    if (search) {
      fetchResults(search);
    }
  }, []);

  const fetchResults = async (search) => {
    const res = await fetch(`/api/search?query=${search}`);
    const data = await res.json();
    // const data = await res.json();
    setFbResults(data.fbData);
    setInstaResults(data.instaData);
    setXResults(data.xData);
    setYtResults(data.ytData);
    // setResults(data);
  };

  // console.log("the results are ", results);
  console.log("the facebook are ", fbResults);
  console.log("the instaa are ", instaResults);
  console.log("the twitter are ", xResults);
  console.log("the youtubes are ", ytResults);
  console.log("label", location.label);
  console.log("latitude", location.lat);
  console.log("longitude", location.lng);

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
      {/* <div>
        <h2>Selected Location</h2>
        <p>Label: {location.label}</p>
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lng}</p>
      </div> */}
      <CustomTabPanel value={value} index={0}>
        <SearchResultsInstagram instaResults={instaResults} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SearchResultsListTwitter xResults={xResults} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SearchResultsListFacebook searchResultsFacebook={fbResults} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SearchResultsListYouTube ytResults={ytResults} />
        {/* <YoutubeSearchTemplate/> */}
        {/* <VideoList /> */}
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
