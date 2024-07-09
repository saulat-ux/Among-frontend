import React from "react";
import { TextField, Autocomplete, Box, Typography, Grid } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { useDispatch } from "react-redux";

const locations = [
  { label: "New York", value: "new_york" },
  { label: "Los Angeles", value: "los_angeles" },
  { label: "Chicago", value: "chicago" },
  { label: "Houston", value: "houston" },
  { label: "Phoenix", value: "phoenix" },
  // Add more locations as needed
];

const LocationSelector = () => {
  const dispatch = useDispatch();

  const handleLocationChange = (event, newValue) => {
    if (newValue) {
    }
  };

  return (
    <Box sx={{ width: 400, margin: "0 auto", paddingTop: "20px" }}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 700 }}
          >
            Select location
          </Typography>
        </Grid>
        <Grid item>
          <PlaceIcon />
        </Grid>
      </Grid>
      <Autocomplete
        options={locations}
        getOptionLabel={(option) => option.label}
        onChange={handleLocationChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        )}
      />
    </Box>
  );
};

export default LocationSelector;
