const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');

const updateBlogVotesService = async (blog, userId) => {
  try {
    userId = userId.toString();
    const { votes, _id } = blog;
    const hasUserVotedIndex = votes.likedUsers.indexOf(userId);

    if (hasUserVotedIndex === -1) {
      votes.total++;
      votes.likedUsers.push(userId);
    } else {
      votes.total--;
      votes.likedUsers.splice(hasUserVotedIndex, 1);
    }

    const blogsCollection = getCollection('blogs');
    const { modifiedCount } = await blogsCollection.updateOne({ _id }, { $set: { votes } });

    if (!modifiedCount) throw "Can't update votes of the blog";

    return { result: 'Blog votes updated' };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  updateBlogVotesService,
};
