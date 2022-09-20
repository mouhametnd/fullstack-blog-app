const { getCollection } = require('../../utils/get-collection');

const updateUsernameService = async ({ newUsername, username }) => {
  // already check the username is different
  // generetate a new token, update user if not taked

  try {
    const usersCollection = getCollection('users');
    const hasRegistedUser = await usersCollection.findOne({ username: newUsername });
    if (hasRegistedUser) throw 'username is not available';

    const { modifiedCount } = await usersCollection.updateOne(
      { username },
      {
        $set: {
          username: newUsername,
          latestChange: new Date(),
        },
      }
    );

    if (modifiedCount) return { result: 'username updated successfully' };

    throw 'Error changing the username';
  } catch (error) {
    return { error };
  }
};

module.exports = { updateUsernameService };
