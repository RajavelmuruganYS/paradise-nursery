import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.cartItems.find(i => i.id === action.payload.id);
      if (!existing) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalAmount += action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        item.quantity = quantity;
        state.totalAmount += item.price * quantity;
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
