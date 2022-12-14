import { IBaseAction, IBlog } from '../../../types';

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
  toggleBlogVote(a: IBlogsSlice, b: IToggleBlogVoteAction): IBlogsSlice;
  resetBlogsState(a: IBlogsSlice): IBlogsSlice;
  editBlog(a: IBlogsSlice, b: IEditBlogAction): IBlogsSlice;
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
export interface IToggleBlogVoteAction extends IBaseAction {
  payload: {
    blogsName: TBlogsNames;
    blogId: string;
    userId: string;
  };
}
export interface IEditBlogAction extends IBaseAction {
  payload: {
    blogsName: TBlogsNames;
    blogId: string;
    newTitle: string;
    newDescription: string;
  };
}