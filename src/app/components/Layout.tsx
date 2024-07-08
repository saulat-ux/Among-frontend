"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Typography,
} from "@mui/material";
import { AccountCircle, Search as SearchIcon } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import { styled, alpha } from "@mui/material/styles";

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

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    // Add your search logic here, e.g., updating state or calling an API
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#efefef", color: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontWeight: 700 } }}
          >
            SMCA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "auto" }, mx: 2 }}>
              <form onSubmit={handleSearchSubmit}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Search>
              </form>
            </Box>
          </Box>
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
      <Box component="main" sx={{ mt: { xs: 7, sm: 8 }, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
