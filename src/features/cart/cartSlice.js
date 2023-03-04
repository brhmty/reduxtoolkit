import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../utils/data/cartItems";

const initialState = {
  cartItems: cartItems,
  amountCart: 4,
  totalPrice: 0,
  isLoading: true,
  isFilter: false,
  isModal: false,
  isInfoEmpty: false,
  isCartSection: true,
  isCartCheckout: true,
  isBtnCartClear: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      changeCartItems(state, itemId);
    },
    itemAmountInc: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      if (cartItem.amount < 5) cartItem.amount += 1;
    },
    itemAmountDec: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      if (cartItem.amount > 0) cartItem.amount -= 1;
      if (cartItem.amount === 0) changeCartItems(state, itemId);
    },
    clearCart: (state) => {
      state.isFilter = true;
      state.isModal = true;
    },
    calculateTotalPrice: (state) => {
      let priceSum = 0;
      let itemAmount = 0;
      state.cartItems.forEach((cartItem) => {
        priceSum += Number(cartItem.price) * cartItem.amount;
        itemAmount += Number(cartItem.amount);
      });
      state.totalPrice = priceSum.toFixed(2);
      state.amountCart = itemAmount;
      if (state.amountCart === 0) emptyCartItems(state);
    },
    modalCancel: (state) => {
      state.isFilter = false;
      state.isModal = false;
    },
    modalConfirm: (state) => {
      state.isFilter = false;
      state.isModal = false;
      state.cartItems = [];
      emptyCartItems(state);
    },
  },
});

const emptyCartItems = (state) => {
  state.isCartSection = false;
  state.isCartCheckout = false;
  state.isBtnCartClear = false;
  state.isInfoEmpty = true;
  state.amountCart = 0;
};

const changeCartItems = (state, itemId) => {
  state.cartItems = state.cartItems.filter(
    (cartItem) => cartItem.id !== itemId
  );
};

//reducers
export const {
  removeItem,
  itemAmountInc,
  itemAmountDec,
  clearCart,
  calculateTotalPrice,
  modalCancel,
  modalConfirm,
} = cartSlice.actions;

export default cartSlice.reducer;
