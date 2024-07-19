// @ts-nocheck
import React from "react";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchResultTemplate from "../Search/searchTemplate";
import FacebookSearchTemplate from "./FacebookSearchTemplate";

// const searchResultsFacebook = [
//   {
//     icon: <FacebookIcon />,
//     title: "Facebook.SearchTopic",
//     followers: "15m followers",
//     link: "https://facebook.com/topic",
//     description:
//       "Learn how to scrape data from Facebook using various tools and techniques.",
//   },
//   {
//     icon: <FacebookIcon />,
//     title: "Facebook.AnotherTopic",
//     followers: "5m followers",
//     link: "https://facebook.com/anotheronetopic",
//     description:
//       "Use developer tools to manually scrape data or utilize web scraping libraries.",
//   },
//   {
//     icon: <FacebookIcon />,
//     title: "Facebook.AnotherTopic",
//     followers: "8m followers",
//     link: "https://facebook.com/anothertopic",
//     description:
//       "Learn how to scrape data from Facebook using various tools and techniques.",
//   },
//   {
//     icon: <FacebookIcon />,
//     title: "Facebook.AnotherTopic",
//     followers: "12m followers",
//     link: "https://facebook.com/anothertopic",
//     description:
//       "Use developer tools to manually scrape data or utilize web scraping libraries.",
//   },
//   {
//     icon: <FacebookIcon />,
//     title: "Facebook.AnotherTopic",
//     followers: "20m followers",
//     link: "https://facebook.com/anothertopic",
//     description:
//       "Use developer tools to manually scrape data or utilize web scraping libraries.",
//   },
//   // Add more objects as needed
// ];

const SearchResultsListFacebook = ({ searchResultsFacebook }) => {
  return (
    <Box>
      {searchResultsFacebook.map((result, index) => (
        // <SearchResultTemplate
        //   key={index}
        //   icon={<FacebookIcon />}
        //   title={result.title}
        //   media={result.media}
        //   link={result.link}
        //   snippet={result.snippet}
        //   fmImg={
        //     result.pagemap.cse_thumbnail
        //       ? result.pagemap.cse_thumbnail[0].src
        //       : ""
        //   }
        //   description={result.description}
        // />
        <FacebookSearchTemplate
          key={index}
          title={result.title}
          media={result.media}
          link={result.link}
          snippet={result.snippet}
          fmImg={
            result.pagemap.cse_thumbnail
              ? result.pagemap.cse_thumbnail[0].src
              : ""
          }
          description={result.description}
        />
      ))}
    </Box>
  );
};

export default SearchResultsListFacebook;
