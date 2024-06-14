import { configureStore } from "@reduxjs/toolkit";
import dishSlice from "./slices/dishSlice";

const restaurentStore = configureStore({
  reducer: {
    dishReducer: dishSlice,
  },
});
export default restaurentStore;


