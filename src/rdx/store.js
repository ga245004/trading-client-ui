import { configureStore } from "@reduxjs/toolkit";
import dashboard from "./slices/dashboard.slice";
export const store = configureStore({
  reducer: {
    dashboard
  }
});
