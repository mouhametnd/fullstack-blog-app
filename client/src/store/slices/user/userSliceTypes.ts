import { IUser } from '../../../types/types';

export type TUserSlice = null | {
  userToken: string;
  user: IUser;
};

export interface IUserSliceCaseReducers {
  [x: string]: (state: TUserSlice, action: { type: string; payload: any }) => TUserSlice;
  setUser(a: TUserSlice, b: ISetUserAction): TUserSlice;
}

export interface ISetUserAction {
  type: string;
  payload: TUserSlice;
}

export type TSetUserReducer = (a: TUserSlice, b: ISetUserAction) => TUserSlice;
