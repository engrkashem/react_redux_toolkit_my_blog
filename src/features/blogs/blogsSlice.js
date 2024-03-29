import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (saved) => {
  const blogs = await getBlogs(saved);

  return blogs;
});

// create slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;