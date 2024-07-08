import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchResultTemplate from "../Search/searchTemplate";

const searchResultsInstagram = [
  {
    icon: <InstagramIcon />,
    title: "Instagram.SearchTopic",
    followers: "19m followers",
    link: "https://instagram.com/topic",
    description:
      "The most straightforward way to scrape data from a website is to manually copy data from the source and analyze it. Browser developer tools.",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram.AnotherTopic",
    followers: "2m followers",
    link: "https://instagram.com/anotheronetopic",
    description:
      "Another way to scrape data from a website is to use tools and libraries designed for web scraping.",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram.AnotherTopic",
    followers: "3m followers",
    link: "https://instagram.com/anothertopic",
    description:
      "Another way to scrape data from a website is to use tools and libraries designed for web scraping.",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram.AnotherTopic",
    followers: "10m followers",
    link: "https://instagram.com/anothertopic",
    description:
      "Another way to scrape data from a website is to use tools and libraries designed for web scraping.",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram.AnotherTopic",
    followers: "10m followers",
    link: "https://instagram.com/anothertopic",
    description:
      "Another way to scrape data from a website is to use tools and libraries designed for web scraping.",
  },
  // Add more objects as needed
];

const SearchResultsInstagram = () => {
  return (
    <Box>
      {searchResultsInstagram.map((result, index) => (
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

export default SearchResultsInstagram;
