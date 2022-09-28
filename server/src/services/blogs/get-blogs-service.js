const { getCollection } = require('../../utils/get-collection');
const { getSortedBy } = require('../../utils/get-sorted-by');

const getBlogsService = async ({ blogsToSend, blogsToSkip, sortBy }) => {
  try {
    const blogsCollection = getCollection('blogs');
    const result = await blogsCollection
      .find({})
      .skip(blogsToSkip)
      .limit(blogsToSend)
      .sort(getSortedBy(sortBy))
      .toArray();
      console.log(result)
    return { result };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getBlogsService,
};
