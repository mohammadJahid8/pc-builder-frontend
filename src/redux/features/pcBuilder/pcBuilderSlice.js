import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: undefined,
  motherboard: undefined,
  ram: undefined,
  psu: undefined,
  storage: undefined,
  monitor: undefined,
};

const pcBuilderSlice = createSlice({
  name: "pcBuild",
  initialState,
  reducers: {
    handlePcBuild: (state, action) => {
      const { category } = action.payload;
      if (initialState.hasOwnProperty(category)) {
        state[category] = action.payload;
      }
    },
  },
});

export const { handlePcBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
