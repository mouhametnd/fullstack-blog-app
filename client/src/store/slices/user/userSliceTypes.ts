import { IUser } from '../../../types/types';

export type TUserSlice = (IUser & { userToken: string }) | null;

export interface IUserSliceCaseReducers {
  [x: string]: (state: TUserSlice, action: { type: string; payload: any }) => TUserSlice;
  setUser(a: TUserSlice, b: ISetUserAction): TUserSlice;
  updateUserDetail(a: TUserSlice, b: IUpdateUserNameAction): TUserSlice;
}

export interface ISetUserAction {
  type: string;
  payload: TUserSlice;
}

export interface IUpdateUserNameAction {
  type: string;
  payload: { newValue: unknown; propName: string };
}
