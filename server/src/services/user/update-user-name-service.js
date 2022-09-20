const { getCollection } = require('../../utils/get-collection');

const updateUserNameService = async ({ newName, username }) => {
  try {

    const usersCollection = getCollection('users');
    const { modifiedCount } = await usersCollection.updateOne(
      { username },
      { $set: { name: newName, latestChange: new Date() } }
    );
    
    if (modifiedCount) {
      return {
        result: {
          msg: 'user name updated',
          newName,
        },
      };
    }

    throw 'Error updating the name';
  } catch (error) {
    return { error };
  }
};
module.exports = {
  updateUserNameService,
};
