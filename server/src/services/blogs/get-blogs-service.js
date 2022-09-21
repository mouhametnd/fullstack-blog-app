const { getCollection } = require('../../utils/get-collection');

const getBlogsService = async ({ blogsToSend, blogsToSkip }) => {
  try {
    const blogsCollection = getCollection('blogs');
    const result = await blogsCollection.find({}).skip(blogsToSkip).limit(blogsToSend).toArray();
    return { result };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getBlogsService,
};
