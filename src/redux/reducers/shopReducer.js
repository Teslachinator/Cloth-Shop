const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem("cart")) || [],
    // amount: JSON.parse(localStorage.getItem("cart")) || 0,
    amount: JSON.parse(localStorage.getItem("amount")) || 0,
    currentItem: JSON.parse(localStorage.getItem("cartCard")) || {},
    favoritesItem: JSON.parse(localStorage.getItem("cartFavorite")) || [],
  },
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
      localStorage.setItem("cartCard", JSON.stringify(state.currentItem));
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
      localStorage.setItem("cartFavorite", JSON.stringify(state.favoritesItem));
    },
    deleteFavoritesItem(state) {
      state.favoritesItem = [];
      localStorage.setItem("cartFavorite", JSON.stringify(state.favoritesItem));
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
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
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
      if (state.itemsInCart === []) {
        state.amount = 0;
      }
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
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
