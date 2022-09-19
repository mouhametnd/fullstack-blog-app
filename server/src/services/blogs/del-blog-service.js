const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');

const delBlogService = async (blogId, username) => {
  try {
    const _id = ObjectId(blogId);
    const blogsCollection = getCollection('blogs');
    const { deletedCount } = await blogsCollection.deleteOne({ _id });

    if (!deletedCount) return { error: 'No blog to delete found' };

    const usersCollection = getCollection('users');
    await usersCollection.updateOne({ username }, { $pull: { blogs: _id } });

    return { result: 'Blog deleted Successfully' };
  } catch (err) {
    return { error: 'Error fetching blog' };
  }
};
module.exports = {
  delBlogService
}