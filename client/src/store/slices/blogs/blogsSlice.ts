import { createSlice } from '@reduxjs/toolkit';
import { IBlog } from '../../../types/types';
import { appendBlogs, increasePage, setBlogs, toggleBlogVote, updateBlog } from './blogsSliceReducers';
import { IBlogsSlice, IBlogsSliceCaseReducers } from './blogsSliceTypes';

const initialState: IBlogsSlice = {
  allBlogs: {
    blogs: null,
    currentPage: 1,
  },
  userBlogs: {
    blogs: null,
    currentPage: 1,
  },
};

const blogsSlice = createSlice<IBlogsSlice, IBlogsSliceCaseReducers>({
  name: 'user',
  initialState,
  reducers: {
    setBlogs,
    appendBlogs,
    increasePage,
    toggleBlogVote,
    updateBlog,
    resetBlogs() {
      return initialState;
    },
  },
});

const { actions: blogsSliceActions, reducer: blogsSliceReducer } = blogsSlice;

export { blogsSliceActions, blogsSliceReducer };
