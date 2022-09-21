const { blogShape } = require('../../shapes/blog-shape');
const { getCollection } = require('../../utils/get-collection');

const addBlogService = async ({ blogProps, username }) => {
  try {
    const newBlog = blogShape(blogProps);
    const blogsCollection = getCollection('blogs');
    const usersCollection = getCollection('users');
    const [{ insertedId }, { modifiedCount }] = await Promise.all([
      blogsCollection.insertOne(newBlog),
      usersCollection.updateOne({ username }, { $push: { blogs: newBlog._id } }),
    ]);

    if (!insertedId || !modifiedCount) throw new Error();

    return { result: { ...newBlog } };
  } catch (error) {
    return { error: 'server error while adding blog' };
  }
};

module.exports = { addBlogService };
