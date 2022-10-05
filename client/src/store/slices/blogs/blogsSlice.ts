import { createSlice } from '@reduxjs/toolkit';
import { appendBlogs, increasePage, setBlogs, toggleBlogVote, editBlog } from './blogsSliceReducers';
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
  dashboardBlogs: {
    blogs: null,
    currentPage: 1,
  },
};

// the same component is appending?

const blogsSlice = createSlice<IBlogsSlice, IBlogsSliceCaseReducers>({
  name: 'user',
  initialState,
  reducers: {
    setBlogs,
    appendBlogs,
    increasePage,
    toggleBlogVote,
    editBlog,
    resetBlogsState() {
      return initialState;
    },
  },
});

const { actions: blogsSliceActions, reducer: blogsSliceReducer } = blogsSlice;

export { blogsSliceActions, blogsSliceReducer };
