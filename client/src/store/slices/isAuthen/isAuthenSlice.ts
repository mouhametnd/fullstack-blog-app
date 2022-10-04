import { createSlice } from '@reduxjs/toolkit';

const isAutheSlice = createSlice({
  initialState: false,
  name: 'isAuthe',
  reducers: {
    setIsAuthen(_, { payload }: { type: string; payload: boolean }) {
      return payload;
    },
  },
});

const { actions: isAutheSliceActions, reducer: isAutheSliceReducer } = isAutheSlice;

export { isAutheSliceActions, isAutheSliceReducer };
