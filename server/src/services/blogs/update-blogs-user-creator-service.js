const { getCollection } = require('../../utils/get-collection');

const updateBlogsUserCreatorService = async ({ username, newUsername, newName }) => {
  try {
    const blogsCollection = getCollection('blogs');
    const updateObj = {
      filter: { 'userCreator.username': username },
    };

    if (newUsername) {
      updateObj.value = { $set: { 'userCreator.username': newUsername } };
    } else {
      updateObj.value = { $set: { 'userCreator.name': newName } };
    }

    const { filter, value } = updateObj;

    await blogsCollection.updateMany(filter, value);
    return { result: 'user blogs updated successfully' };
  } catch (error) {
    return { error: 'Error updating user blogs' };
  }
};

module.exports = {
  updateBlogsUserCreatorService,
};
