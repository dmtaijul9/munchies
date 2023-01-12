import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../lib/type";

const initialState = {
  items: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: items) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //@ts-ignore
        state.items[itemIndex].quantity += Number(action.payload.quantity);
        state.cartTotalQuantity += Number(action.payload.quantity);
      } else {
        const tempProduct = {
          ...action.payload,
          quantity: Number(action.payload.quantity),
        };
        //@ts-ignore
        state.items.push(tempProduct);
        state.cartTotalQuantity += Number(action.payload.quantity);
      }
    },
    increamentCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: items) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //@ts-ignore

        state.items[itemIndex].quantity += 1;
        state.cartTotalQuantity += 1;
      }
    },
    decreamentCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: items) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //@ts-ignore
        state.items[itemIndex].quantity -= 1;
        state.cartTotalQuantity -= 1;
      }
    },
    deleteItems: (state, action) => {
      const afterDeleteItem = state.items.filter(
        (item: items) => item.id !== action.payload.id
      );

      state.items = [...afterDeleteItem];
      state.cartTotalQuantity -= 1;
    },
    setTotal: (state, action) => {
      state.cartTotalAmount = action.payload;
    },
  },
});

export const {
  addToCart,
  increamentCart,
  decreamentCart,
  deleteItems,
  setTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
