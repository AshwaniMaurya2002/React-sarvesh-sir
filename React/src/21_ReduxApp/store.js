import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

//! Step 1:--> configure the store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
