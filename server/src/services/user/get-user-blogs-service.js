const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { getQueryBlogs } = require('../../utils/get-query-blogs');
const { getSortedBy } = require('../../utils/get-sorted-by');

const getUserBlogService = async ({ blogsToSend, blogsToSkip, username, sortBy }) => {
  try {
    const usersCollection = getCollection('users');
    const blogsCollection = getCollection('blogs');

    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();
    const queryBlogs = getQueryBlogs(user.blogs).slice(blogsToSkip, blogsToSend);

    if (!queryBlogs.length) return { result: [] };
    const userBlogs = await blogsCollection.find({ $or: queryBlogs }).sort(getSortedBy(sortBy)).toArray();

    return { result: userBlogs };
  } catch (error) {
    return { error: 'server error while fetching user blogs' };
  }
};

module.exports = {
  getUserBlogService,
};
