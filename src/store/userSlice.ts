import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: any = {
  token: "",
};
const registeredUserSlice = createSlice({
  name: "registeredUser",
  initialState,
  reducers: {
    registeredUserInfo(state, action: PayloadAction<any>) {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});
export const { registeredUserInfo } = registeredUserSlice.actions;
export default registeredUserSlice.reducer;
