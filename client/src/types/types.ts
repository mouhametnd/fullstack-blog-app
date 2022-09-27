import { TUserSlice } from '../store/slices/user/userSliceTypes';
import store from '../store/store';

export interface IUser {
  blogs: string[];
  name: string;
  username: string;
  latestUpdate: number;
  userLatestBlogs?: IBlog[] ;
}

export interface IBlog {
  _id: string;
  title: string;
  description: string;
  votes: {
    total: number;
    likedUsers: string[];
  };
  userCreator: {
    username: string;
    name: string;
  };
  lastUpdate: number;
}

export type IStore =  {
  user: TUserSlice;
  isAuthen: boolean;
}

export type TLoginSigninResponse = TUserSlice | { userToken: null };
