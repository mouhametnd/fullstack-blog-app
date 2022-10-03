import { IUserSliceCaseReducers, TUserSlice } from './userSliceTypes';

export const setUser: IUserSliceCaseReducers['setUser'] = (_, { payload }) => payload;

export const updateUserDetail: IUserSliceCaseReducers['updateUserDetail'] = (state, { payload }) => {
  const { newValue, propName } = payload;

  const newUser = {
    ...state,
    [propName]: newValue,
  } as TUserSlice;
  
  if(propName === 'userToken'){
console.log('same')
    localStorage.setItem('userToken', newValue as string)
  } 
  return newUser;
};
