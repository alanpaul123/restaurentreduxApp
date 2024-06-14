import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  const result = await axios.get(
    "https://restaurentserver.onrender.com/restaurants"
  );
  localStorage.setItem("allDishes", JSON.stringify(result.data));
  return result.data;
});

const dishSlice = createSlice({
  name: "dishes",
  initialState: {
    allDishes: [],
    allDishDummy: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchDish: (state, action) => {
      state.allDishes = state.allDishDummy.filter((item) =>
        item.cuisine_type.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      state.allDishes = action.payload;
      state.allDishDummy = action.payload;
      action.loading = false;
      state.error = "";
    });

    builder.addCase(fetchDishes.pending, (state, action) => {
      state.allDishes = [];
      state.allDishDummy = [];
      action.loading = true;
      state.error = "";
    });

    builder.addCase(fetchDishes.rejected, (state, action) => {
      state.allDishes = [];
      state.allDishDummy = [];
      action.loading = false;
      state.error = "API Called Failed...try again later ";
    });
  },
});

export const { searchDish } = dishSlice.actions;
export default dishSlice.reducer;
