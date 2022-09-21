const { userShape } = require('../../shapes/user-shape');
const { getCollection } = require('../../utils/get-collection');

const addUserService = async userProps => {
  try {
    const usersCollection = getCollection('users');
    const newUSer = await userShape({ ...userProps });
    await usersCollection.insertOne(newUSer);

    return { result: 'user signed successfully' };
  } catch (error) {
    return { error: 'server error signing the user' };
  }
};

module.exports = { addUserService };
