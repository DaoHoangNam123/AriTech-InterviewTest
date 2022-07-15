import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./Slices/signUpSlice";
export const store = configureStore({
  reducer: {
    signUpSlice,
  },
});
