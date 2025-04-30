import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  success: "",
  error: "",
  debugError: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    HandleShowModal: (state) => {
      try {
        state.showModal = true;

        if (state.showModal === true) {
          state.success = "Modal is open";
          state.error = "";
          state.debugError = "";
        } else {
          state.success = "";
          state.error = "Unable to open modal"; // user-facing
          state.debugError = "Expected showModal to be true, but it was false"; // internal
        }
      } catch (err) {
        state.error = "An unexpected error occurred.";
        state.debugError = err.message || "Unknown error in HandleShowModal";
      }
    },
  },
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
