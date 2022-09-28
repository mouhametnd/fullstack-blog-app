import { configureStore } from '@reduxjs/toolkit';
import { IStore } from '../types/types';
import { blogsSliceReducer } from './slices/blogs/blogsSlice';
import { isAutheSliceReducer } from './slices/isAuthe/isAutheSlice';
import { searchParamsSliceReducer } from './slices/searchParams/searchParamsSlice';
import { userSliceReducer } from './slices/user/userSlice';

const store = configureStore<IStore>({
  reducer: {
    user: userSliceReducer,
    isAuthen: isAutheSliceReducer,
    searchParams: searchParamsSliceReducer,
    blogs: blogsSliceReducer
  },
});

export default store;
