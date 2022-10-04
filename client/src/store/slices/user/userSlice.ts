import { createSlice } from '@reduxjs/toolkit';
import { setUser, updateUserProp } from './userSliceReducers';
import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

const userSlice = createSlice<TUserSlice, IUserSliceCaseReducers>({
  name: 'user',
  initialState: null,
  reducers: {
    setUser,
    updateUserProp,
    resetUserState() {
      return null;
    },
  },
});

const { actions: userSliceActions, reducer: userSliceReducer } = userSlice;

export { userSliceActions, userSliceReducer };
