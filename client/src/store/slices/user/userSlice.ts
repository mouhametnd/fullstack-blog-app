import { createSlice } from '@reduxjs/toolkit';
import { setUserReducer } from './setUserReducer';
import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

const userSlice = createSlice<TUserSlice, IUserSliceCaseReducers>({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: setUserReducer,
  },
});

const { actions: userSliceActions, reducer: userSliceReducer } = userSlice;

export { userSliceActions, userSliceReducer };
