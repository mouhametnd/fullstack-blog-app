const { userShape } = require('../../shapes/user-shape');
const { getCollection } = require('../../utils/get-collection');

const addUserService = async userProps => {
  try {
    const usersCollection = getCollection('users');
    const newUser = await userShape({ ...userProps });
    await usersCollection.insertOne(newUser);

    const { blogs, name, username, latestUpdate,_id } = newUser;
    return { result: { blogs, name, username, latestUpdate, _id } };
  } catch (error) {
    return { error: 'server error signing the user' };
  }
};

module.exports = { addUserService };
