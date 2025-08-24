// store/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) =>
          i.id === item.id &&
          i.selectedSize === item.selectedSize &&
          i.selectedColor === item.selectedColor
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter(
        (i) =>
          !(
            i.id === item.id &&
            i.selectedSize === item.selectedSize &&
            i.selectedColor === item.selectedColor
          )
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
