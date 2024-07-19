// @ts-nocheck
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const formatPublishTime = (publishTime) => {
  const date = new Date(publishTime);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const FacebookSearchTemplate = ({
  media,

  title,
  link,
  description,
  snippet,
  fmImg,
  publishTime,
}) => {
  const formattedPublishTime = formatPublishTime(publishTime);
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        border: "1px solid #ddd",
        bgcolor: "background.paper",
      }}
    >
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" color="textSecondary">
          www.facebook.com
        </Typography>
        <ChevronRightIcon fontSize="small" />
        <Typography variant="body2" color="textSecondary">
          watch
        </Typography>
      </Box>
      <Typography
        variant="h5"
        component="div"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        {title}
      </Typography>
      <Grid container spacing={1} alignItems="center">
        <Link
          className="ml-4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Box
            component="img"
            src={fmImg}
            alt={title}
            sx={{
              width: "100%",
              maxWidth: 150,
              borderRadius: 2,
              marginTop: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Link>

        <Grid item xs={12} sm={8} sx={{ paddingLeft: 1 }}>
          <Typography
            variant="body1"
            paragraph
            sx={{ margin: 0, marginLeft: 2 }}
          >
            {snippet}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box
            display="flex"
            alignItems="center"
            color="textSecondary"
            sx={{ mt: 0, marginLeft: 2 }}
          >
            <Typography variant="body2">Facebook</Typography>
            <Box mx={1}>
              <Typography variant="body2">•</Typography>
            </Box>
            <Typography variant="body2"> {title}</Typography>
            <Box mx={1}>
              <Typography variant="body2">•</Typography>
            </Box>
            {/* <Typography variant="body2">{formattedPublishTime}</Typography> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FacebookSearchTemplate;
