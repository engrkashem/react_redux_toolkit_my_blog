import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: false,
  all: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    saved: (state, action) => {
      state.saved = action.payload;
      state.all = false;
    },
    all: (state, action) => {
      state.all = action.payload;
      state.saved = false;
    },
  },
});

export default filterSlice.reducer;
export const { saved, all } = filterSlice.actions;
