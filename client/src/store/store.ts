import { configureStore } from '@reduxjs/toolkit';
import { IStore } from '../types/types';
import { isAutheSliceReducer } from './slices/isAuthe/isAutheSlice';
import { searchParamsSliceReducer } from './slices/searchParams/searchParamsSlice';
import { userSliceReducer } from './slices/user/userSlice';

const store = configureStore<IStore>({
  reducer: {
    user: userSliceReducer,
    isAuthen: isAutheSliceReducer,
    searchParams: searchParamsSliceReducer
  },
});

export default store;
