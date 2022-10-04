import { IBaseAction, IUser } from '../../../types/types';

export type TUserSlice = (IUser & { userToken: string }) | null;

export interface IUserSliceCaseReducers {
  [x: string]: (state: TUserSlice, action: { type: string; payload: any }) => TUserSlice;
  setUser(a: TUserSlice, b: ISetUserAction): TUserSlice;
  updateUserProp(a: TUserSlice, b: IUpdateUserNameAction): TUserSlice;
  resetUserState(a:TUserSlice, b:IBaseAction):null
}

export interface ISetUserAction {
  type: string;
  payload: TUserSlice;
}

export interface IUpdateUserNameAction {
  type: string;
  payload: { newValue: unknown; propName: string };
}
