import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "@/Redux/slices/cartSlice";
import { homeReducer } from "@/Redux/slices/HomePageSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
  },
});
export default store;
