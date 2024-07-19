import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AccountAuth/AccountAuthSlice";
import locationReducer from "./features/location/locationSlice";

// store variable is a global variable.
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      location: locationReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
