import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log("payload", action.payload);
      console.log("cartItems before", state.cartItems);

      // Check if the product is already in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the product exists, update the quantity or other details
        state.cartItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // If the product does not exist, add it to the cart
        state.cartItems.push(action.payload);
      }

      console.log("cartItems after", state.cartItems);
    },
    removeCart: () => {
      // Remove the cart item from the cart collection
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
