import { createSlice } from "@reduxjs/toolkit";
import { getPhotos, getSinglePhotos } from "./routThunks";

export const routSlice = createSlice({
  name: "rout",
  initialState: {
    routs: [],
    singlePhotos: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.routs = action.payload;
    });
    builder.addCase(getSinglePhotos.fulfilled, (state, action) => {
      state.singlePhotos = action.payload;
    });
  },
});
