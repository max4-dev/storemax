import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading',
};

export const fetchGoods = createAsyncThunk('goods/fetchByIdStatus', async (props) => {
  const { category, sortFilter, searchValue, order } = props;
  const { data } = await axios.get(
    `https://638d373d4190defdb73ffb73.mockapi.io/items?${category}&sortBy=${sortFilter}&order=${order}&${searchValue}`,
  );
  return data;
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [fetchGoods.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchGoods.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchGoods.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setItems } = goodsSlice.actions;
export default goodsSlice.reducer;
