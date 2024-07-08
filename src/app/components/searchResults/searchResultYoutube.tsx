import React from "react";
import { Box } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchResultTemplate from "../Search/searchTemplate";

const searchResultsYouTube = [
  {
    icon: <YouTubeIcon />,
    title: "YouTube.SearchTopic",
    followers: "30m subscribers",
    link: "https://youtube.com/topic",
    description:
      "Learn various methods to scrape data from YouTube using tools and libraries.",
  },
  {
    icon: <YouTubeIcon />,
    title: "YouTube.AnotherTopic",
    followers: "6m subscribers",
    link: "https://youtube.com/anotheronetopic",
    description:
      "Use web scraping libraries or manually extract data using developer tools.",
  },
  {
    icon: <YouTubeIcon />,
    title: "YouTube.AnotherTopic",
    followers: "9m subscribers",
    link: "https://youtube.com/anothertopic",
    description:
      "Learn various methods to scrape data from YouTube using tools and libraries.",
  },
  {
    icon: <YouTubeIcon />,
    title: "YouTube.AnotherTopic",
    followers: "15m subscribers",
    link: "https://youtube.com/anothertopic",
    description:
      "Use web scraping libraries or manually extract data using developer tools.",
  },
  {
    icon: <YouTubeIcon />,
    title: "YouTube.AnotherTopic",
    followers: "22m subscribers",
    link: "https://youtube.com/anothertopic",
    description:
      "Use web scraping libraries or manually extract data using developer tools.",
  },
  // Add more objects as needed
];

const SearchResultsListYouTube = () => {
  return (
    <Box>
      {searchResultsYouTube.map((result, index) => (
        <SearchResultTemplate
          key={index}
          icon={result.icon}
          title={result.title}
          followers={result.followers}
          link={result.link}
          description={result.description}
        />
      ))}
    </Box>
  );
};

export default SearchResultsListYouTube;
