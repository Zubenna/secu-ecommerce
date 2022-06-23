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

    // GET ALL ORDERS
    getOrdersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
} = orderSlice.actions;
export default orderSlice.reducer;
