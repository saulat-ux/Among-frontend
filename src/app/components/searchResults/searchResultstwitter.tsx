import React from "react";
import { Box } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import SearchResultTemplate from "../Search/searchTemplate";

const searchResultsTwitter = [
  {
    icon: <XIcon />,
    title: "Twitter.SearchTopic",
    followers: "25m followers",
    link: "https://twitter.com/topic",
    description:
      "Explore techniques to scrape data from Twitter using various tools and methods.",
  },
  {
    icon: <XIcon />,
    title: "Twitter.AnotherTopic",
    followers: "3m followers",
    link: "https://twitter.com/anotheronetopic",
    description:
      "Utilize web scraping libraries or manually scrape data using browser tools.",
  },
  {
    icon: <XIcon />,
    title: "Twitter.AnotherTopic",
    followers: "7m followers",
    link: "https://twitter.com/anothertopic",
    description:
      "Explore techniques to scrape data from Twitter using various tools and methods.",
  },
  {
    icon: <XIcon />,
    title: "Twitter.AnotherTopic",
    followers: "10m followers",
    link: "https://twitter.com/anothertopic",
    description:
      "Utilize web scraping libraries or manually scrape data using browser tools.",
  },
  {
    icon: <XIcon />,
    title: "Twitter.AnotherTopic",
    followers: "18m followers",
    link: "https://twitter.com/anothertopic",
    description:
      "Utilize web scraping libraries or manually scrape data using browser tools.",
  },
  // Add more objects as needed
];

const SearchResultsListTwitter = () => {
  return (
    <Box>
      {searchResultsTwitter.map((result, index) => (
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

export default SearchResultsListTwitter;
