import { createSlice } from '@reduxjs/toolkit';
import { setUserReducer } from './setUserReducer';
import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

const initialState = {
  _id:'633492815d49a039a96e8243',
  username: 'jonan__1',
  blogs: [],
  name: 'jonan',
  userToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbmFuX18xIiwibmFtZSI6ImpvbmFuICIsImlhdCI6MTY2NDc5MTYzNCwiZXhwIjoxNjY0ODA5NjM0fQ.1DU7XfOMbIRnu5nyz8a01p1uh_pTjBdwpxyrslfCPIM',
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
