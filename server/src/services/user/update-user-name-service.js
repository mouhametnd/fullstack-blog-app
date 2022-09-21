const { getCollection } = require('../../utils/get-collection');

const updateUserNameService = async ({ newName, username }) => {
  try {
    const usersCollection = getCollection('users');
    const { modifiedCount } = await usersCollection.updateOne(
      { username },
      { $set: { name: newName, latestChange: new Date() } }
    );

    if (!modifiedCount) throw new Error();

    return { result: { msg: 'user name updated successfully', newName } };
  } catch (error) {
    return { error: 'Error updating the user name' };
  }
};
module.exports = {
  updateUserNameService,
};
