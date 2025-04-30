import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
  Success: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,

  reducers: {
    addToCart: (state, action) => {
      state.cartItems = action.payload
      state.Success = "Item added to cart successfully";
      // Optional: recalculate totalAmount and totalQuantity here
    },



  },
});


export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;