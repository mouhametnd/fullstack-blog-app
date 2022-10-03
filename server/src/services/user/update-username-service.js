const { getCollection } = require('../../utils/get-collection');

const updateUsernameService = async ({ newUsername, username }) => {
  try {
    const usersCollection = getCollection('users');
    const { modifiedCount } = await usersCollection.updateOne(
      { username },
      {
        $set: {
          username: newUsername,
          latestUpdate: Date.now(),
        },
      }
    );

    if (modifiedCount) return { result:  newUsername};
    throw new Error();
  } catch (error) {
    return { error: 'server error changing the username' };
  }
};

module.exports = { updateUsernameService };
