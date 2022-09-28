import { createSlice } from '@reduxjs/toolkit';
import { ISearchParamsSlice, ISearchParamsSliceCaseReducers } from './searchParamsTypes';

const initialState: ISearchParamsSlice = {
  sortBy: 'random',
  perPage: '10',
};

const searchParamsSlice = createSlice<ISearchParamsSlice, ISearchParamsSliceCaseReducers>({
  name: 'user',
  initialState,
  reducers: {
    setSortBy(state, { payload }) {
      return { ...state, sortBy: payload };
    },
    setPerPage(state, { payload }) {
      return { ...state, perPage: payload };
    },
  },
});

const { actions: searchParamsSliceActions, reducer: searchParamsSliceReducer } = searchParamsSlice;

export { searchParamsSliceActions, searchParamsSliceReducer };
