// @ts-nocheck
import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchResultTemplate from "../Search/searchTemplate";
import InstagramSearchTemplate from "./InstagramSearchTemplate";

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

const SearchResultsInstagram = ({ instaResults }) => {
  return (
    <Box>
      {instaResults.map((result, index) => (
        // <SearchResultTemplate
        //   key={index}
        //   icon={<InstagramIcon />}
        //   title={result.username}
        //   followers="34 million followers"
        //   // link={result.link}
        //   img={result.media_url}
        //   img_2={result.profile_pic_url}
        //   comment={result.comment_count}
        //   like={result.like_count}
        //   caption={result.caption}
        //   description={result.description}
        //   friends_count={result.friends_count}
        //   display_url={result.display_url}
        // />
        <InstagramSearchTemplate
          key={index}
          title={result.username}
          img={result.media_url}
          img_2={result.profile_pic_url}
          comment={result.comment_count}
          like={result.like_count}
          caption={result.caption}
          description={result.description}
          friends_count={result.friends_count}
          display_url={result.display_url}
        />
      ))}
    </Box>
  );
};

export default SearchResultsInstagram;
