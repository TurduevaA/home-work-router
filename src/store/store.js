import { configureStore } from "@reduxjs/toolkit";
import { routSlice } from "./routSlice";

export const store = configureStore({
  reducer: {
    rout: routSlice.reducer,
  },
});
