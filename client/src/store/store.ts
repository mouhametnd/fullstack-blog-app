import { configureStore } from '@reduxjs/toolkit';
import { IStore } from '../types/types';
import { isAutheSliceReducer } from './slices/isAuthe/isAutheSlice';
import { userSliceReducer } from './slices/user/userSlice';

const store = configureStore<IStore>({
  reducer: {
    user: userSliceReducer,
    isAuthen: isAutheSliceReducer
  },
});

export default store;
