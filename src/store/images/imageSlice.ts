import { galleryImages } from "../../app/pages/GalleryFeed/mockdata";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    imageGallery: galleryImages,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        // replace the array with the new fetched data
        state.imageGallery = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function

export default imageSlice.reducer;

// function to get imageData from API

export const fetchImages = createAsyncThunk("images/", async (params: any) => {
  const { section, sort, window } = params;
  const response = await axios.get(
    `https://api.imgur.com/3/gallery/${section}/${sort}/${window}`,
    {
      headers: {
        Authorization: "Client-ID ",
      },
    }
  );
  return response.data;
});
