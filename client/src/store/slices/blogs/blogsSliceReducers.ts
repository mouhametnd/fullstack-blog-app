import { IBlogsSliceCaseReducers } from './blogsSliceTypes';

export const setBlogs: IBlogsSliceCaseReducers['setBlogs'] = (state, { payload }) => {
  const { blogs, blogsName } = payload;
  const blogsPart = state[blogsName];
  return { ...state, [blogsName]: { ...blogsPart, blogs } };
};

export const appendBlogs: IBlogsSliceCaseReducers['appendBlogs'] = (state, { payload }) => {
  const { blogs, blogsName } = payload;
  const blogsPart = state[blogsName];
  const appendedBlogs = [...blogsPart.blogs, ...blogs];
  return { ...state, [blogsName]: { ...blogsPart, blogs: appendedBlogs } };
};

export const increasePage: IBlogsSliceCaseReducers['increasePage'] = (state, { payload }) => {
  const blogsPart = state[payload];
  const newPage = blogsPart.currentPage + 1;
  return { ...state, [payload]: { ...blogsPart, currentPage: newPage } };
};

export const toggleBlogVote: IBlogsSliceCaseReducers['toggleBlogVote'] = (state, { payload }) => {
  const { blogsName, userId, blogId } = payload;
  const { blogs, currentPage } = state[blogsName];
  const votedBlog = blogs?.find(({ _id }) => _id === blogId)!;
  const votedBlogIndex = blogs?.findIndex(({ _id }) => _id === blogId)!;

  let total = votedBlog.votes.total;
  const likedUsers = [...votedBlog.votes.likedUsers];
  const hasUserVotedIndex = likedUsers.indexOf(userId);

  if (hasUserVotedIndex !== -1) {
    --total;
    likedUsers.splice(hasUserVotedIndex, 1);
  } else {
    ++total;
    likedUsers.push(userId);
  }
  const updatedBlog = { ...votedBlog, votes: { total, likedUsers } };
  const updatedBlogs = [...blogs];
  updatedBlogs.splice(votedBlogIndex, 1, updatedBlog);
  return { ...state, [blogsName]: { currentPage, blogs: updatedBlogs } };
};

export const updateBlog: IBlogsSliceCaseReducers['updateBlog'] = (state, { payload }) => {
  const { blogsName, blogId, newTitle, newDescription } = payload;
  const blogs = [...state[blogsName].blogs];
  const updatedBlog = { ...blogs?.find(({ _id }) => _id === blogId)! };
  const updatedBlogIndex = blogs?.findIndex(({ _id }) => _id === blogId)!;

  updatedBlog.title = newTitle;
  updatedBlog.description = newDescription;
  updatedBlog.lastUpdate = Date.now();
  blogs?.splice(updatedBlogIndex, 1, updatedBlog);

  return { ...state, [blogsName]: { ...state[blogsName], blogs } };
};

export const addBlog: IBlogsSliceCaseReducers['addBlog'] = (state, { payload }) => {
  const allBlogs = state['allBlogs'];
  const userBlogs = state['userBlogs'];
  const allBlogsUpdated = [...allBlogs.blogs, payload];
  const userBlogsUpdated = [...userBlogs.blogs, payload];

  return {
    ...state,
    allBlogs: { ...allBlogs, blogs: allBlogsUpdated },
    userBlogs: { ...userBlogs, blogs: userBlogsUpdated },
  };
};
