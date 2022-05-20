import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  isFetching: false,
  error: false,
  message: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // ADD ITEM
    addOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addOrderStart, addOrderSuccess, addOrderFailure } =
  orderSlice.actions;
export default orderSlice.reducer;
