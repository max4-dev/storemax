import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 0,
  search: '',
  title: 'Все товары',
  activePage: 1,
  order: 'desc',
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
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.activePage = Number(action.payload.activePage);
      state.type = Number(action.payload.type);
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch, setTitle, setActivePage, setFilters, setOrder } =
  filterSlice.actions;
export default filterSlice.reducer;
