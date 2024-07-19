// store/locationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  label: string;
  lat: string;
  lng: string;
}

const initialState: LocationState = {
  label: "",
  lat: "",
  lng: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<LocationState>) {
      state.label = action.payload.label;
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
