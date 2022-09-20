const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

const userShape = async ({name, username, password}) => {
  const hashedPwd = await bcrypt.hash(password, 10);

  return {
    name,
    username,
    password: hashedPwd,
    _id: ObjectId(),
    blogs: [],
    latestChange: new Date()
  };
};

module.exports = {
  userShape,
};
