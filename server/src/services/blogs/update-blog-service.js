const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');

const updateBlogService = async ({ blogId, title, description, lastUpdate }) => {
  try {
    const _id = ObjectId(blogId);
    const blogsCollection = getCollection('blogs');
    const {modifiedCount} = await blogsCollection.updateOne({ _id }, { $set: { title, description, lastUpdate } });

    if (!modifiedCount) return { error: 'No blog to update found' };
    return { result: 'Blog updated Successfully' };
  } catch (err) {
    return { error: 'Error updating blog' };
  }
};
module.exports = {
  updateBlogService
}