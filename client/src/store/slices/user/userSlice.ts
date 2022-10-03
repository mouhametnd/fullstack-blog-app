import { createSlice } from '@reduxjs/toolkit';
import { setUser, updateUserDetail } from './userSliceReducers';
import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

const initialState = {
  _id: '633492815d49a039a96e8243',
  username: 'jonan__1',
  blogs: [],
  name: 'jonan',
  userToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbmFuX18xIiwibmFtZSI6ImpvbmFuX18xMiIsImlhdCI6MTY2NDgyOTY0NywiZXhwIjoxNjY0OTE2MDQ3fQ.H5KGYOY53EuyDgMlWQ8vxD0roC8t4DGSGGX2mPEceZo',
  latestUpdate: 1664292844933,
};

const userSlice = createSlice<TUserSlice, IUserSliceCaseReducers>({
  name: 'user',
  initialState,
  reducers: {
    setUser,
    updateUserDetail,
  },
});

const { actions: userSliceActions, reducer: userSliceReducer } = userSlice;

export { userSliceActions, userSliceReducer };
