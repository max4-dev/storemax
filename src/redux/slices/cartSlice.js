import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (!findItem) {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      } else {
        findItem.count++;
      }
      state.totalCount++;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusProduct(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem.count > 1) {
        if (findItem) {
          findItem.count--;
        }
        state.totalCount--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
    clearProducts(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    removeProduct(state, action) {
      const deletedItem = state.items.find((item) => item.id === action.payload);

      state.totalCount -= deletedItem.count;
      state.totalPrice -= deletedItem.price * deletedItem.count;

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectTotalCount = (state) => state.cart.totalCount;

export const { addProduct, minusProduct, removeProduct, clearProducts } = cartSlice.actions;
export default cartSlice.reducer;
