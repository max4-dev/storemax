import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 0,
  sort: {
    name: 'Цена',
    sortProperty: 'price',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.type = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = filterSlice.actions;
export default filterSlice.reducer;
