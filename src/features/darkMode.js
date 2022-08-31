import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { bg: "", text: "" };

const modeColor = createSlice({
  name: "mode",
  initialState: { value: initialStateValue },
  reducers: {
    darkMode: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { darkMode } = modeColor.actions;

export default modeColor.reducer;
