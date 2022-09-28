import { createSlice } from '@reduxjs/toolkit';
import { IBlogsSlice, IBlogsSliceCaseReducers } from './blogsSliceTypes';

const initialState: IBlogsSlice = {
  allBlogs: {
    blogs: null,
    currentPage: 1,
  },
  dashboardBlogs: {
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
    setBlogs(state, { payload }) {
      const { blogs, blogsName } = payload;
      const blogsPart = state[blogsName];
      return { ...state, [blogsName]: { ...blogsPart, blogs } };
    },
    appendBlogs(state, { payload }) {
      const { blogs, blogsName } = payload;
      const blogsPart = state[blogsName];
      const appendedBlogs = [...blogsPart.blogs!, ...blogs];
      return { ...state, [blogsName]: { ...blogsPart, blogs: appendedBlogs } };
    },
    increasePage(state, { payload }) {
      const blogsPart = state[payload];
      const newPage = blogsPart.currentPage + 1;
      return { ...state, [payload]: { ...blogsPart, currentPage: newPage } };
    },
  },
});

const { actions: blogsSliceActions, reducer: blogsSliceReducer } = blogsSlice;

export { blogsSliceActions, blogsSliceReducer };
