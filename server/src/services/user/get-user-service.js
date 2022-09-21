const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { getQueryBlogs } = require('../../utils/get-query-blogs');

const getUserService = async (username, maxNumOfBlogs = 3) => {
  try {
    const usersCollection = getCollection('users');
    const blogsCollection = getCollection('blogs');
    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();

    const queryBlogs = getQueryBlogs(user.blogs, maxNumOfBlogs)
    const userLatestBlogs = await blogsCollection.find({ $or: queryBlogs }).toArray();

    return { result: { user, userLatestBlogs } };
  } catch (error) {
    return { error: "server error while fetching user credits" };
  }
};

module.exports = {
  getUserService,
};
