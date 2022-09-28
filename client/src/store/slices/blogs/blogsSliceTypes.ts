import { IBaseAction, IBlog } from '../../../types/types';

export type IBlogsNames = 'allBlogs' | 'userBlogs' | 'dashboardBlogs';

export type IBlogsSlice = {
  [Key in IBlogsNames]: {
    page: number;
    blogs: IBlog | null;
  };
};

export interface IBlogsSliceCaseReducers {
  [x: string]: (state: IBlogsSlice, action: { type: string; payload: any }) => IBlogsSlice;
  setBlogs(a: IBlogsSlice, b: ISetBlogsAction): IBlogsSlice;
  appendBlogs(a: IBlogsSlice, b: ISetBlogsAction): IBlogsSlice;
  increasePage(a: IBlogsSlice, b: ISetBlogsAction): IBlogsSlice;
}

export interface ISetBlogsAction extends IBaseAction {
  payload: {
    blogsName: IBlogsNames;
    blogs: IBlog[];
  };
}

// export interface ISetPerPageAction  extends IBaseAction{
//   payload: TPerPageValues;
// }

// export type TSetUserReducer = (a: IBlogsSlice, b: ISetSortByAction) => IBlogsSlice;
