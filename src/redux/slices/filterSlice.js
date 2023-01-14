import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 0,
  search: '',
  title: 'Все товары',
  activePage: 1,
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
    setSearch(state, action) {
      state.search = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch, setTitle, setActivePage } = filterSlice.actions;
export default filterSlice.reducer;
