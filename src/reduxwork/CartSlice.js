import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  ItemCount: 0,
  CartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
    },
    addItem: (state, action) => {
      const NewItem = { ...action.payload, quantity: 1 };
      state.CartItems = [...state.CartItems, NewItem];
      state.ItemCount = state.CartItems.length;
    },
    IncreamentQuantity: (state, { payload }) => {
      const createItem = state.CartItems.find(
        (food) => food._id === payload.foodid
      );
      createItem.quantity += 1;
    },
    DecreamentQuantity: (state, { payload }) => {
      const createItem = state.CartItems.find(
        (food) => food._id === payload.foodid
      );
      createItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.CartItems.forEach((food) => {
        totalAmount += food.quantity * food.FoodPrice;
      });
      state.CartTotalAmount = totalAmount;
    },
  },
});

export const {
  calculateTotal,
  addItem,
  clearCart,
  IncreamentQuantity,
  DecreamentQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
