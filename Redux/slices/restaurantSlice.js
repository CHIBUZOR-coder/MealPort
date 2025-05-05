import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  successMessage: "",
  error: "",
};

const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    localAddResturant: (state, action) => {
      state.data = action.payload;
      if (state?.data?.length > 0) {
        state.successMessage = "Resturant data added successfully";
      } else {
        state.error = "Failed to add resturant data";
      }
    },
  },
});

export const resturanActions = resturantSlice.actions;
export const resturantReducer = resturantSlice.reducer;
