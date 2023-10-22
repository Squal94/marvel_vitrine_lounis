import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataImport: [],
  },
  reducers: {
    dataSelected: (state, { payload }) => {
      state.dataImport = payload;
    },
  },
});

export default dataSlice.reducer;
export const { dataSelected } = dataSlice.actions;
