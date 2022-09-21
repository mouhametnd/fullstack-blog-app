const { getCollection } = require('../../utils/get-collection');

const updateBlogDetailsService = async ({ _id, title, description, lastUpdate }) => {
  try {
    const blogsCollection = getCollection('blogs');
    const { modifiedCount } = await blogsCollection.updateOne({ _id }, { $set: { title, description, lastUpdate } });

    if (!modifiedCount) throw new Error();
    return { result: 'blog updated Successfully' };
  } catch (err) {
    return { error: 'server error while updating blog' };
  }
};
module.exports = {
  updateBlogDetailsService,
};
