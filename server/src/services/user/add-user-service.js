const { userShape } = require('../../shapes/user-shape');
const { getCollection } = require('../../utils/get-collection');

const addUserService = async userProps => {
  try {
    const usersCollection = getCollection('users');
    const newUSer = await userShape({ ...userProps });
    const result = await usersCollection.insertOne(newUSer);

    return { result };
  } catch (err) {
    return { error: 'Error adding new user' };
  }
};

module.exports = { addUserService };
