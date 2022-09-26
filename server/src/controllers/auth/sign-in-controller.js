const { addUserService } = require('../../services/user/add-user-service');
const { createUserToken } = require('../../utils/create-user-token');

const signInController = async ({ body }, res) => {
  const [userToken, { error }] = await Promise.all([createUserToken(body.username, body.name), addUserService(body)]);
console.log('sss')
  if (error) {
    res.status(500);
    res.json({ error });
    return;
  }

  res.json({
    result: userToken,
  });
};

module.exports = {
  signInController,
};
