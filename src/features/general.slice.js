import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    scrollPosition: "",
    content: "",
    imgSize: "",
    toolbar: false,
  },
  reducers: {
    contentSelected: (state, { payload }) => {
      state.content = payload.toLowerCase();
    },
  },
});

export default generalSlice.reducer;
export const { contentSelected } = generalSlice.actions;
