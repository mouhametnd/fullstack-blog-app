const { getCollection } = require('../../utils/get-collection');

const updateBlogVotesService = async (blog, userId) => {
  try {
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
    
    if (!modifiedCount) throw new Error();

    return { result: 'blog votes updated' };
  } catch (error) {
    return { error: "server error while updating the blogs" };
  }
};

module.exports = {
  updateBlogVotesService,
};
