import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  createdAt: false,
  likes: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    createdAt: (state, action) => {
      state.createdAt = action.payload;
      state.likes = false;
    },
    likes: (state, action) => {
      state.createdAt = false;
      state.likes = action.payload;
    },
  },
});

export default sortSlice.reducer;
export const { createdAt, likes } = sortSlice.actions;
