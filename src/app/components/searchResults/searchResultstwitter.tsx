// @ts-nocheck
import React from "react";
import { Box } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import SearchResultTemplate from "../Search/searchTemplate";
import TwitterSearchTemplate from "./TwitterSearchTemplate";

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

const SearchResultsListTwitter = ({ xResults }) => {
  return (
    <Box>
      {xResults.map((result, index) => (
        // <SearchResultTemplate
        //   key={index}
        //   icon={<XIcon />}
        //   title={result.name}
        //   category={result.category}
        //   followers={result.followers_count}
        //   description={result.description}
        //   location={result.location}
        //   favoriteCount={result.favorite_count}
        //   friends_count={result.friends_count}
        //   caption={result.caption}
        //   display_url={result.display_url}
        //   img_x={result.profile_image_url_http}
        //   img_x2={result.profile_url}
        // />
        <TwitterSearchTemplate
          key={index}
          title={result.name}
          category={result.category}
          followers={result.followers_count}
          description={result.description}
          location={result.location}
          favoriteCount={result.favorite_count}
          friends_count={result.friends_count}
          caption={result.caption}
          display_url={result.display_url}
          img_x={result.profile_image_url_http}
          img_x2={result.profile_url}
        />
      ))}
    </Box>
  );
};

export default SearchResultsListTwitter;
