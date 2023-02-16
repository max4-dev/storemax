import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'rejected',
}

const initialState = {
  items: [],
  status: Status.LOADING,
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

  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.status = Status.LOADING;
    })

    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchGoods.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    })
  }
});

export const { setItems } = goodsSlice.actions;
export default goodsSlice.reducer;
