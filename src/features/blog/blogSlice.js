import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./blogAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async ({id}) => {
  const blog = await getBlog(id);

  return blog;
});

// create slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;