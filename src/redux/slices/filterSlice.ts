import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SortPropertyEnum {
  PRICE = 'price',
  TITLE = 'title',
  RATING = 'rating'
}

export enum OrderEnum {
  DESC = 'desc',
  ASC = 'asc',
}

export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
}

interface FilterSliceState {
  type: number,
  search: string,
  title: string,
  activePage: number,
  order: OrderEnum,
  sort: SortType,
}

const initialState: FilterSliceState = {
  type: 0,
  search: '',
  title: 'Все товары',
  activePage: 1,
  order: OrderEnum.DESC,
  sort: {
    name: 'Цена',
    sortProperty: SortPropertyEnum.PRICE,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<number>) {
      state.type = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.activePage = Number(action.payload.activePage);
      state.type = Number(action.payload.type);
    },
    setOrder(state, action: PayloadAction<OrderEnum>) {
      state.order = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch, setTitle, setActivePage, setFilters, setOrder } =
  filterSlice.actions;
export default filterSlice.reducer;
