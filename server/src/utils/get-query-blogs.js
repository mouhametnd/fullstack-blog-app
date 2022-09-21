const { ObjectId } = require('mongodb');

const getQueryBlogs = (blogs, maxNumOfBlogs = 'all') => {
  if (typeof maxNumOfBlogs !== 'number') return blogs.map(blogId => ({ _id: ObjectId(blogId) }));

  const blogsQuery = [];
  blogs.forEach((blogId, index) => {
    if (index < maxNumOfBlogs) blogsQuery.push({ _id: ObjectId(blogId) });
  });
  return blogsQuery;
};

module.exports = {
  getQueryBlogs,
};
