const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    amount: 0,
    currentItem: {},
  },
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },

    setItemInCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemsInCart.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.itemsInCart.push(newItem);
      }
      state.amount += newItem.amount;
    },
    deleteItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsInCart.find(
        (item) => item.id === newItem.id
      );
      state.itemsInCart = state.itemsInCart.filter(
        (catalogSweatersTab) => catalogSweatersTab.id !== action.payload.id
      );
      state.amount -= existingItem.amount;
    },
  },
});
export const { setItemInCart, deleteItemFromCart, setCurrentItem } =
  cartSlice.actions;
export default cartSlice.reducer;
