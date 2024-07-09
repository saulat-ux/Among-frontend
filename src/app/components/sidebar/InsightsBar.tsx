import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const InsightsSidebar = () => {
  const tags = ["React", "JavaScript", "CSS", "HTML", "Node.js"];
  const keywords = ["Programming", "Web Development", "Frontend", "Backend"];

  const [selectedTags, setSelectedTags] = useState({});
  const [selectedKeywords, setSelectedKeywords] = useState({});

  const handleTagChange = (tag) => {
    setSelectedTags((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }));
  };

  const handleKeywordChange = (keyword) => {
    setSelectedKeywords((prev) => ({
      ...prev,
      [keyword]: !prev[keyword],
    }));
  };

  const countSelected = (items) => Object.values(items).filter(Boolean).length;

  return (
    <Paper
      elevation={3}
      sx={{
        width: { xs: "100%", sm: 250 },
        padding: 2,
        margin: { xs: 0, sm: 2 },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            borderBottom: "2px solid #3f51b5",
            paddingBottom: 1,
          }}
        >
          Tags [{countSelected(selectedTags)}]
        </Typography>
        <List>
          {tags.map((tag, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!selectedTags[tag]}
                    onChange={() => handleTagChange(tag)}
                  />
                }
                label={tag}
                sx={{
                  width: "100%",
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                    padding: 1,
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "#3f51b5",
                      color: "#fff",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            borderBottom: "2px solid #3f51b5",
            paddingBottom: 1,
          }}
        >
          Keywords [{countSelected(selectedKeywords)}]
        </Typography>
        <List>
          {keywords.map((keyword, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!selectedKeywords[keyword]}
                    onChange={() => handleKeywordChange(keyword)}
                  />
                }
                label={keyword}
                sx={{
                  width: "100%",
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                    padding: 1,
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "#3f51b5",
                      color: "#fff",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default InsightsSidebar;
