const { getCollection } = require('../../utils/get-collection');

const delBlogService = async (_id, username) => {
  try {
    const blogsCollection = getCollection('blogs');
    const usersCollection = getCollection('users');
    const [{ deletedCount }] = await Promise.all([
      blogsCollection.deleteOne({ _id }),
      usersCollection.updateOne({ username }, { $pull: { blogs: _id } }),
    ]);
    if (!deletedCount) throw new Error();

    return { result: 'blog deleted Successfully' };
  } catch (err) {
    return { error: 'server error while deleting the blog' };
  }
};
module.exports = {
  delBlogService,
};
