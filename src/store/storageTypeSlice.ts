import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const storageTypeSlice = createSlice({
  name: "storageType",
  initialState: {
    storageType: "sessionStorage",
    token: "",
  },
  reducers: {
    setStorageType: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        storageType: action.payload,
        token: action.payload,
      };
    },
  },
});

export const { setStorageType } = storageTypeSlice.actions;
export default storageTypeSlice.reducer;
