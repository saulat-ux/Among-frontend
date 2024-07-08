"use client";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  Typography,
  InputBase,
  alpha,
  styled,
  IconButton,
  Toolbar,
  AppBar,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px", // Adjusted borderRadius to make it full
  backgroundColor: "#808080", // Gray background color
  "&:hover": {
    backgroundColor: alpha("#808080", 0.85),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.6, 1.6, 1.6, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "60ch",
    },
  },
}));

const LandingSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    // Add your search logic here, e.g., updating state or calling an API
  };
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 700 }}
          >
            SMCA
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="language"
              sx={{ ml: 1 }}
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="place"
              sx={{ ml: 1 }}
            >
              <PlaceIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <Typography variant="body2" sx={{ mr: 1, fontWeight: "bold" }}>
                John Doe
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="account"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Social Media Content Aggregator
        </Typography>
        <Box sx={{ width: { xs: "100%", sm: "auto" }, mx: 2 }}>
          <form onSubmit={handleSearchSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                value={searchQuery}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
              />
            </Search>
          </form>
        </Box>
        <Box sx={{ display: "flex", mb: 4, mt: 3 }}>
          <Button
            variant="outlined"
            onClick={() => handleLanguageChange("English")}
            sx={{
              mx: 1,
              backgroundColor:
                selectedLanguage === "English" ? "black" : "white",
              color: selectedLanguage === "English" ? "white" : "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor:
                  selectedLanguage === "English"
                    ? "black"
                    : alpha("#808080", 0.25),
              },
            }}
          >
            English
          </Button>
          <Button
            variant={selectedLanguage === "Spanish" ? "contained" : "outlined"}
            onClick={() => handleLanguageChange("Spanish")}
            sx={{
              mx: 1,
              backgroundColor:
                selectedLanguage === "Spanish" ? "black" : "white",
              color: selectedLanguage === "Spanish" ? "white" : "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor:
                  selectedLanguage === "Spanish"
                    ? "black"
                    : alpha("#808080", 0.25),
              },
            }}
          >
            Spanish
          </Button>
          <Button
            variant={
              selectedLanguage === "Urdu/Hindi" ? "contained" : "outlined"
            }
            onClick={() => handleLanguageChange("Urdu/Hindi")}
            sx={{
              mx: 1,
              backgroundColor:
                selectedLanguage === "Urdu/Hindi" ? "black" : "white",
              color: selectedLanguage === "Urdu/Hindi" ? "white" : "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor:
                  selectedLanguage === "Urdu/Hindi"
                    ? "black"
                    : alpha("#808080", 0.25),
              },
            }}
          >
            Urdu/Hindi
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LandingSearchPage;
