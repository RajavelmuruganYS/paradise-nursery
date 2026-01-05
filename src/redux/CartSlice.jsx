import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, a) {
      state.items.push({ ...a.payload, quantity: 1 });
    },
    inc(state, a) {
      state.items.find(i => i.id === a.payload).quantity++;
    },
    dec(state, a) {
      const it = state.items.find(i => i.id === a.payload);
      if (it.quantity > 1) it.quantity--;
      else state.items = state.items.filter(i => i.id !== a.payload);
    },
    remove(state, a) {
      state.items = state.items.filter(i => i.id !== a.payload);
    },
  },
});

export const { addToCart, inc, dec, remove } = cartSlice.actions;
export default cartSlice.reducer;
