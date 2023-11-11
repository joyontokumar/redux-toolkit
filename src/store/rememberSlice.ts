import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  remembermeInfo: false,
};
const rememberSlice = createSlice({
  name: "remember-me",
  initialState,
  reducers: {
    rememberMe(state, action: PayloadAction<any>) {
      console.log("get payload", action.payload);
      return {
        remembermeInfo: action.payload,
      };
    },
  },
});
export const { rememberMe } = rememberSlice.actions;
export default rememberSlice.reducer;
