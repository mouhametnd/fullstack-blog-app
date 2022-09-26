import { createSlice } from '@reduxjs/toolkit';

const isAutheSlice = createSlice({
  initialState: false,
  name: 'isAuthe',
  reducers: {
    setIsAuthe(_, { payload }: { type: string; payload: boolean }) {
      return payload;
    },
  },
});

const { actions: isAutheSliceActions, reducer: isAutheSliceReducer } = isAutheSlice;

export { isAutheSliceActions, isAutheSliceReducer };
