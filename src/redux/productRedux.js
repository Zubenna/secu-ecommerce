import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isFetching: false,
  error: false,
  message: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // GET ALL ITEMS
    getItemsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getItemsSuccess: (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
    },
    getItemsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE ITEM
    deleteItemsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteItemsSuccess: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
      // state.items.splice(
      //   state.items.findIndex((item) => item._id === action.payload._id),
      //   1
      // );
    },
    deleteItemsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE ITEM
    updateItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateItemSuccess: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
      // state.items[
      //   state.items.findIndex((item) => item._id === action.payload)
      // ] = action.payload.product;
    },
    updateItemFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    // ADD ITEM
    addItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addItemSuccess: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
      // state.items.push(action.payload);
    },
    addItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getItemsStart,
  getItemsSuccess,
  getItemsFailure,
  deleteItemsStart,
  deleteItemsSuccess,
  deleteItemsFailure,
  updateItemStart,
  updateItemSuccess,
  updateItemFailure,
  addItemStart,
  addItemSuccess,
  addItemFailure,
} = productSlice.actions;
export default productSlice.reducer;
