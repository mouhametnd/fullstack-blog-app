import { IBlogsSlice } from '../store/slices/blogs/blogsSliceTypes';
import { ISearchParamsSlice } from '../store/slices/searchParams/searchParamsTypes';
import { TUserSlice } from '../store/slices/user/userSliceTypes';
import store from '../store/store';

export interface IUser {
  _id: string;
  blogs: string[];
  name: string;
  username: string;
  latestUpdate: number;
  userLatestBlogs?: IBlog[];
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

export type IStore = {
  user: TUserSlice;
  isAuthen: boolean;
  searchParams: ISearchParamsSlice;
  blogs: IBlogsSlice;
};

export type TLoginSigninResponse = TUserSlice | { userToken: null };

export type TSortByValues = 'random' | 'newest' | 'latest' | 'mostVoted' | 'lessVoted' | 'title';
export type TPerPageValues = '5' | '10' | '15' | '20';

export interface IBaseAction {
  type: string;
  payload: any;
}

export interface IFormInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  pattern: string;
  autoComplete: 'on' | 'off';
}


export interface IForm {
  inputs: IFormInputProps[];
  handleBlur(a: string): () => unknown;
  handleSubmit(): unknown;
  error: string | false;
}
