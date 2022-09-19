const { blogShape } = require('../../shapes/blog-shape');
const { getCollection } = require('../../utils/get-collection');

const addBlogService = async blog => {
  try {
    const newBlog = blogShape(blog);
    const blogsCollection = getCollection('blogs');
    const usersCollection = getCollection('users');

    const result = await blogsCollection.insertOne(newBlog);
    const updateReslt = await usersCollection.updateOne(
      {
        username: blog.userCreator.username,
      },
      {
        $push: {
          blogs: newBlog._id,
        },
      }
    );
    return { result: { ...newBlog } };
  } catch (error) {
    return { error };
  }
};

module.exports = { addBlogService };
