import React from "react";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchResultTemplate from "../Search/searchTemplate";

const searchResultsFacebook = [
  {
    icon: <FacebookIcon />,
    title: "Facebook.SearchTopic",
    followers: "15m followers",
    link: "https://facebook.com/topic",
    description:
      "Learn how to scrape data from Facebook using various tools and techniques.",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook.AnotherTopic",
    followers: "5m followers",
    link: "https://facebook.com/anotheronetopic",
    description:
      "Use developer tools to manually scrape data or utilize web scraping libraries.",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook.AnotherTopic",
    followers: "8m followers",
    link: "https://facebook.com/anothertopic",
    description:
      "Learn how to scrape data from Facebook using various tools and techniques.",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook.AnotherTopic",
    followers: "12m followers",
    link: "https://facebook.com/anothertopic",
    description:
      "Use developer tools to manually scrape data or utilize web scraping libraries.",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook.AnotherTopic",
    followers: "20m followers",
    link: "https://facebook.com/anothertopic",
    description:
      "Use developer tools to manually scrape data or utilize web scraping libraries.",
  },
  // Add more objects as needed
];

const SearchResultsListFacebook = () => {
  return (
    <Box>
      {searchResultsFacebook.map((result, index) => (
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

export default SearchResultsListFacebook;
