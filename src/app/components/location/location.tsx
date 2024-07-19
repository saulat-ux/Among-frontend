"use client";
import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Box, Typography, Grid } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { useDispatch } from "react-redux";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity,
} from "country-state-city";
import { setLocation } from "@/app/lib/store/features/location/locationSlice";

interface CountryOption {
  label: string;
  value: string;
  lat: string;
  lng: string;
}

interface StateOption {
  label: string;
  value: string;
}

interface CityOption {
  label: string;
  value: string;
  lat: string;
  lng: string;
}

const LocationSelector: React.FC = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [states, setStates] = useState<StateOption[]>([]);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );
  const [selectedState, setSelectedState] = useState<StateOption | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

  useEffect(() => {
    const allCountries: CountryOption[] = Country.getAllCountries().map(
      (country: ICountry) => ({
        label: country.name,
        value: country.isoCode,
        lat: country.latitude || "",
        lng: country.longitude || "",
      })
    );
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryStates: StateOption[] = State.getStatesOfCountry(
        selectedCountry.value
      ).map((state: IState) => ({
        label: state.name,
        value: state.isoCode,
      }));
      setStates(countryStates);
      setSelectedState(null);
      setCities([]);
      setSelectedCity(null);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      const stateCities: CityOption[] = City.getCitiesOfState(
        selectedCountry.value,
        selectedState.value
      ).map((city: ICity) => ({
        label: city.name,
        value: city.name,
        lat: city.latitude || "",
        lng: city.longitude || "",
      }));
      setCities(stateCities);
      setSelectedCity(null);
    }
  }, [selectedState, selectedCountry]);

  const handleCountryChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: CountryOption | null
  ) => {
    setSelectedCountry(newValue);
  };

  const handleStateChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: StateOption | null
  ) => {
    setSelectedState(newValue);
  };

  const handleCityChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: CityOption | null
  ) => {
    setSelectedCity(newValue);
    if (newValue) {
      const { label, lat, lng } = newValue;
      dispatch(setLocation({ label, lat, lng }));
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
        options={countries}
        getOptionLabel={(option) => option.label}
        onChange={handleCountryChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        )}
      />
      <Autocomplete
        options={states}
        getOptionLabel={(option) => option.label}
        onChange={handleStateChange}
        value={selectedState}
        disabled={!selectedCountry}
        renderInput={(params) => (
          <TextField
            {...params}
            label="State"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        )}
      />
      <Autocomplete
        options={cities}
        getOptionLabel={(option) => option.label}
        onChange={handleCityChange}
        value={selectedCity}
        disabled={!selectedState}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        )}
      />
    </Box>
  );
};

export default LocationSelector;
