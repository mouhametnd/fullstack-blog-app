const { ObjectId } = require('mongodb');
const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { getQueryBlogs } = require('../../utils/get-query-blogs');

const userService = async (username, maxNumOfBlogs = 3) => {
  try {
    const usersCollection = getCollection('users');
    const blogsCollection = getCollection('blogs');
    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();
    // todo findOne instead

    const queryBlogs = getQueryBlogs(user.blogs, maxNumOfBlogs)

    const userLatestBlogs = await blogsCollection.find({ $or: queryBlogs }).toArray();

    return { result: { user, userLatestBlogs } };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  userService,
};
