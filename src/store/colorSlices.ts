import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  blackTheme: false,
  whiteTheme: true,
};
const colorSlice = createSlice({
  name: "color-switcher",
  initialState,
  reducers: {
    blackTheme(state, action: PayloadAction<any>) {
      return {
        ...state,
        blackTheme: action.payload,
        whiteTheme: false,
      };
    },
    whiteTheme(state, action: PayloadAction<any>) {
      return {
        ...state,
        blackTheme: false,
        whiteTheme: action.payload,
      };
    },
  },
});
export const { blackTheme, whiteTheme } = colorSlice.actions;
export default colorSlice.reducer;
