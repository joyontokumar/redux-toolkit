import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: any[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<any>) {
      return [...state, action.payload];
    },
  },
});
export const { add } = cartSlice.actions;
export default cartSlice.reducer;
