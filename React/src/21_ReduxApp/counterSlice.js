import { createSlice } from "@reduxjs/toolkit";

//!  Step 2--> create a slice/feature
export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prev, action) => {
      return prev + 1;
    },
    decre: (prev, action) => {
      return prev - 1;
    },
    reset: (prev, action) => {
      return 0;
    },
  },
});

export const { incre, decre, reset } = counterSlice.actions;
