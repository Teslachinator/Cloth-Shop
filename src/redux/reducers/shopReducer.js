const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    amount: 0,
    currentItem: {},
    favoritesItem: [],
  },
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
    setFavoritesItem(state, action) {
      const existingItem = state.favoritesItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.favoritesItem = state.favoritesItem.filter(
          (catalogSweatersTab) => catalogSweatersTab.id !== action.payload.id
        );
      } else {
        state.favoritesItem.push(action.payload);
      }
      console.log(state.favoritesItem);
    },
    deleteFavoritesItem(state, action) {
      state.favoritesItem = [];
    },
    setItemInCart(state, action) {
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
export const {
  setItemInCart,
  deleteItemFromCart,
  setCurrentItem,
  setFavoritesItem,
  deleteFavoritesItem,
} = cartSlice.actions;
export default cartSlice.reducer;
