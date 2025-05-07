import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: null,
  reducers: {
    pushAdmin: (state, action) => {
      return action.payload;
    }
  },
});

export const { pushAdmin } = adminSlice.actions;

export default adminSlice.reducer;
