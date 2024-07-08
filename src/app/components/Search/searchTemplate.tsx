import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchResultTemplate = ({
  icon,
  title,
  followers,
  link,
  description,
}) => {
  return (
    <Box mb={4}>
      <Box display="flex" alignItems="center" spacing={2}>
        {icon}
        <Box ml={2}>
          <Typography variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color="textSecondary">
              {followers}
            </Typography>
            <IconButton size="small" aria-label="more options">
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
        <Link href={link} color="primary">
          {link}
        </Link>
        <Typography variant="body2" mt={1}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchResultTemplate;
