const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { getQueryBlogs } = require('../../utils/get-query-blogs');
const { getSortedBy } = require('../../utils/get-sorted-by');

const getUserService = async ({ username, maxNumOfBlogs, sortBy }) => {
  try {
    const usersCollection = getCollection('users');
    const blogsCollection = getCollection('blogs');
    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();

    const queryBlogs = getQueryBlogs(user.blogs, maxNumOfBlogs);
    const userLatestBlogs = await blogsCollection.find({ $or: queryBlogs }).sort(getSortedBy(sortBy)).toArray();

    return { result: { user, userLatestBlogs } };
  } catch (error) {
    return { error: 'server error while fetching user credits' };
  }
};

module.exports = {
  getUserService,
};
