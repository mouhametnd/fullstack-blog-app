import { IBaseAction, IBlog } from '../../../types/types';

export type TBlogsNames = 'allBlogs' | 'userBlogs' | 'dashboardBlogs';

export type IBlogsSlice = {
  [Key in TBlogsNames]: {
    currentPage: number;
    blogs: IBlog[] | null;
  };
};

export interface IBlogsSliceCaseReducers {
  [x: string]: (state: IBlogsSlice, action: { type: string; payload: any }) => IBlogsSlice;
  setBlogs(a: IBlogsSlice, b: ISetBlogsAction): IBlogsSlice;
  appendBlogs(a: IBlogsSlice, b: ISetBlogsAction): IBlogsSlice;
  increasePage(a: IBlogsSlice, b: IIncreasePageAction): IBlogsSlice;
  toggleBlogVote(a: IBlogsSlice, b: IToggleBlogVote): IBlogsSlice;
  resetBlogs(a: IBlogsSlice, ): IBlogsSlice;
}

export interface ISetBlogsAction extends IBaseAction {
  payload: {
    blogsName: TBlogsNames;
    blogs: IBlog[];
  };
}
export interface IIncreasePageAction extends IBaseAction {
  payload: TBlogsNames;
}
export interface IToggleBlogVote extends IBaseAction {
  payload: {
    blogsName: TBlogsNames;
    blogId: string;
    userId: string;
  };
}
