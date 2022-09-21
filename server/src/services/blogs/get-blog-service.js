const { getCollection } = require('../../utils/get-collection');

const getBlogService = async _id => {
  try {
    const blogsCollection = getCollection('blogs');
    const result = await blogsCollection.findOne({ _id });

    if (!blogsCollection) throw new Error();
    return { result };
  } catch (error) {
    return { error };
  }
};
module.exports = {
  getBlogService,
};
