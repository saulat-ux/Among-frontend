"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import LocationSelector from "../location/location";
import UserDropdown from "../userProfile/userProfile";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#808080",
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [translations, setTranslations] = useState({
    title: "Social Media Content Aggregator",
    searchPlaceholder: "Search…",
    english: "English",
    spanish: "Spanish",
    urduHindi: "Urdu/Hindi",
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/searchresults?query=${encodeURIComponent(searchQuery)}`);
  };

  const translateText = async (text: string, targetLanguage: string) => {
    try {
      console.log("Sending translation request:", { text, targetLanguage });
      const response = await axios.post(
        "/api/translate",
        {
          text,
          targetLanguage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Translation response:", response.data);
      return response.data.translatedText;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error translating text:",
          error.response?.data || error.message || error
        );
      } else {
        console.error("Error translating text:", error);
      }
      return text;
    }
  };

  const handleLanguageChange = async (language: string, langCode: string) => {
    setSelectedLanguage(language);

    const translatedTexts = await Promise.all([
      translateText("Social Media Content Aggregator", langCode),
      translateText("Search…", langCode),
      translateText("English", langCode),
      translateText("Spanish", langCode),
      translateText("Urdu/Hindi", langCode),
    ]);

    setTranslations({
      title: translatedTexts[0],
      searchPlaceholder: translatedTexts[1],
      english: translatedTexts[2],
      spanish: translatedTexts[3],
      urduHindi: translatedTexts[4],
    });
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
              <UserDropdown />
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
          variant="h4"
          component="h3"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          {translations.title}
        </Typography>
        <Box sx={{ width: { xs: "100%", sm: "auto" }, mx: 2 }}>
          <form onSubmit={handleSearchSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={translations.searchPlaceholder}
                value={searchQuery}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
              />
            </Search>
          </form>
        </Box>
        <Box sx={{ display: "flex", mb: 4, mt: 3 }}>
          <Button
            variant={selectedLanguage === "English" ? "contained" : "outlined"}
            onClick={() => handleLanguageChange("English", "en")}
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
            {translations.english}
          </Button>
          <Button
            variant={selectedLanguage === "Spanish" ? "contained" : "outlined"}
            onClick={() => handleLanguageChange("Spanish", "es")}
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
            {translations.spanish}
          </Button>
          <Button
            variant={
              selectedLanguage === "Urdu/Hindi" ? "contained" : "outlined"
            }
            onClick={() => handleLanguageChange("Urdu/Hindi", "ur")}
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
            {translations.urduHindi}
          </Button>
        </Box>
        <LocationSelector />
      </Box>
    </>
  );
};

export default LandingSearchPage;
