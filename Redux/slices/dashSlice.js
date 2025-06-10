import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingModal: false,
  deliveryModal: false,
};

const dashSlice = createSlice({
  name: "dash",
  initialState,

  reducers: {
    showPending: (state, action) => {
      state.pendingModal = true;
    },
    RemovePending: (state, action) => {
      state.pendingModal = false;
    },
    showDelivery: (state, action) => {
      state.deliveryModal = true;
    },
    RemoveDelivery: (state, action) => {
      state.deliveryModal = false;
    },
  },
});

export const dashActions = dashSlice.actions;
export const dashReducers = dashSlice.reducer;
