const { ObjectId } = require('mongodb');

const getQueryBlogs = (blogs, maxNumOfBlogs = 'all') => {
  if (typeof maxNumOfBlogs === 'number') {
    const blogsQuery = [];
    blogs.forEach((blogId, index) => {
      if (index < maxNumOfBlogs) blogsQuery.push({ _id: ObjectId(blogId) });
    });
    return blogsQuery;
  }

  return blogs.map(blogId => ({ _id: ObjectId(blogId) }));
};

module.exports = {
  getQueryBlogs
}