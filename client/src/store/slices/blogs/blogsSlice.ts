import { createSlice } from '@reduxjs/toolkit';
import { addBlog, appendBlogs, increasePage, setBlogs, toggleBlogVote, editBlog } from './blogsSliceReducers';
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
    editBlog,
    addBlog,
    resetBlogsState() {
      return initialState;
    },
  },
});

const { actions: blogsSliceActions, reducer: blogsSliceReducer } = blogsSlice;

export { blogsSliceActions, blogsSliceReducer };
