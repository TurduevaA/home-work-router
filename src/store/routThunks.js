import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getPhotos = createAsyncThunk(
  "rout,getPhotos",
  async (action, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/phones");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSinglePhotos = createAsyncThunk(
  "rout,getSinglePhotos",
  async (newId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`phones/${newId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
