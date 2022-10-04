import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

export const setUser: IUserSliceCaseReducers['setUser'] = (_, { payload }) => payload;

export const updateUserProp: IUserSliceCaseReducers['updateUserProp'] = (state, { payload }) => {
  const { newValue, propName } = payload;

  const newUser = {
    ...state,
    [propName]: newValue,
  } as TUserSlice;

  if (propName === 'userToken') localStorage.setItem('token', newValue as string);
  else newUser!.latestUpdate = Date.now();
  
  return newUser;
};
