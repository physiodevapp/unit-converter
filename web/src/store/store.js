import { configureStore } from "@reduxjs/toolkit";
import { conversionsSlice } from "./slices/conversions";

export const store = configureStore({
  reducer: {
    conversions: conversionsSlice.reducer,
  },
});
