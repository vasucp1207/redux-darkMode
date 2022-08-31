import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "black";

const themeColor = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeColor } = themeColor.actions;

export default themeColor.reducer;
