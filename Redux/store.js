import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/Redux/slices/cartSlice";
import { homeReducer } from "@/Redux/slices/HomePageSlice";
import { resturantReducer } from "@/Redux/slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
    resturant: resturantReducer,
  },
});
export default store;
