const { createUserToken } = require('../../utils/create-user-token');

const logInController = async (_, res) => {
  const { name, username } = res.locals.user;
  const userToken = await createUserToken(username, name);
  res.json({
    result: {
      user: res.locals.user,
      userToken,
    },
  });
};

module.exports = {
  logInController,
};
