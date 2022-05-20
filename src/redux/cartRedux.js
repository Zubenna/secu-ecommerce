import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].itemQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, itemQuantity: 1 };
        state.products.push(tempProduct);
        // state.cartTotalQuantity += 1;
      }
      // state.quantity += 1;
      // state.products.push(action.payload);
      // state.cartTotalAmount += action.payload.price * action.payload.itemQuantity;
    },
    removeProduct(state, action) {
      const updatedProducts = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.products = updatedProducts;
      // state.cartTotalQuantity -= 1;
    },
    decreaseProduct(state, action) {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products[itemIndex].itemQuantity > 1) {
        state.products[itemIndex].itemQuantity -= 1;
      } else if (state.products[itemIndex].itemQuantity === 1) {
        const newProducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = newProducts;
        // state.cartTotalQuantity -= 1;
      }
      // state.products = newProducts;
    },
    getTotalPrice(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantity } = cartItem;
          const itemTotal = price * itemQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += itemQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

export const {
  resetCart,
  addProduct,
  removeProduct,
  decreaseProduct,
  getTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
