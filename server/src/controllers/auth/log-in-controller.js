const { createUserToken } = require('../../utils/create-user-token');

const logInController = async (req, res) => {
  const { name, username} = res.locals.user;
  const userToken = await createUserToken(username, name);
  res.json({
    user: res.locals.user,
    userToken,
  });
};

module.exports = {
  logInController,
};
