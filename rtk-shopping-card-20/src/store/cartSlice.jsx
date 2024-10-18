


import { createSlice, createAction } from "@reduxjs/toolkit";

// Define the actions
export const add = createAction("cart/add");
export const remove = createAction("cart/remove");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(add, (state, action) => {
        state.push(action.payload);
      })
      .addCase(remove, (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      });
  },
});

export default cartSlice.reducer;
