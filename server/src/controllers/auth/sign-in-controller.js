const { addUserService } = require('../../services/users/add-user-service');
const { createUserToken } = require('../../utils/create-user-token');

const signInController = async (req, res) => {
  await addUserService(req.body);
  const userToken = await createUserToken(req.body.username, req.body.name);

  res.json({
    userToken,
  });
};

module.exports = {
  signInController,
};
