import { createSlice } from '@reduxjs/toolkit';
import { setUserReducer } from './setUserReducer';
import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

const initialState = {
  username: 'jon_lenosnss',
  blogs: [],
  name: 'lopezwws',
  userToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvbl9sZW5vc25zcyIsIm5hbWUiOiJsb3Blend3cyIsImlhdCI6MTY2NDI5NTI1NiwiZXhwIjoxNjY0Mjk4ODU2fQ.HsklITLawDBUsUHpqitbR2HMp9DAFaONvo0k-qRW-JY',
  latestUpdate: 1664292844933,
};

const userSlice = createSlice<TUserSlice, IUserSliceCaseReducers>({
  name: 'user',
  initialState,
  reducers: {
    setUser: setUserReducer,
  },
});

const { actions: userSliceActions, reducer: userSliceReducer } = userSlice;

export { userSliceActions, userSliceReducer };
