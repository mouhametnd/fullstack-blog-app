import { AxiosRequestHeaders } from 'axios';
import { baseInputProps } from './constants';
import { IBlogsSlice, TBlogsNames } from './store/slices/blogs/blogsSliceTypes';
import { ISearchParamsSlice } from './store/slices/searchParams/searchParamsTypes';
import { TUserSlice } from './store/slices/user/userSliceTypes';

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

export interface IUseFormValidationArg {
  [x: string]: {
    name: string;
    value: string;
    regex: RegExp;
  };
}

export type TBaseInputPropsUnion = keyof typeof baseInputProps;

export type TCustomSelectProps = {
  selectOptions: ISelectOption[];
  optionClickHandler: (a: ISelectOption) => unknown;
  title: string;
  defaultValue?: number;
};

export interface ISelectOption {
  title: string;
  value: string;
}

export interface IUseBlogsProps {
  reqEndpoint: string;
  headers: { [x: string]: string };
  blogsName: TBlogsNames;
}

export interface IUseFormProps {
  reqEndpoint: string;
  httpMethod: 'post' | 'put' | 'patch';
  headers: AxiosRequestHeaders;
  formValues: IUseFormValidationArg;
}
export type TUseFormError = { msg: string } | { msg: false };

export type TPageLinks = {
  title: string;
  link: string;
}[];
