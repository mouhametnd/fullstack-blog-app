const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { getPaginationNums } = require('../../utils/get-pagination-nums');
const { getQueryBlogs } = require('../../utils/get-query-blogs');

const userBlogService = async ({ perPage, page, username }) => {
  try {
    const usersCollection = getCollection('users');
    const blogsCollection = getCollection('blogs');

    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();

    const { booksToSend, booksToSkip } = getPaginationNums({ perPage, page });

    const queryBlogs = getQueryBlogs(user.blogs).slice(booksToSkip, booksToSend);

    if(!queryBlogs.length) return {result:[]}

    const userBlogs = await blogsCollection.find({ $or: queryBlogs }).toArray();

    return { result: userBlogs };
  } catch (error) {
    console.log(error);
    return { error: 'Error Fetching user blogs' };
  }
};

module.exports = {
  userBlogService,
};
