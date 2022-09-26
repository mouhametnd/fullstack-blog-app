import { configureStore } from '@reduxjs/toolkit';
import { isAutheSliceReducer } from './slices/isAuthe/isAutheSlice';
import { userSliceReducer } from './slices/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    isAuthen: isAutheSliceReducer
  },
});

export default store;
