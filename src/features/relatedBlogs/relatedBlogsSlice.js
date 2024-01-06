import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedBlogs from "./relatedBlogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  relatedBlogs: [],
  error: "",
};

// async thunk
export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchRelatedBlogs", async ({tags, currentBlogId}) => {
  const blogs = await getRelatedBlogs(tags, currentBlogId);

  return blogs;
});

// create slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedBlogs = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogsSlice.reducer;