const { addNewUserService } = require('../../services/users/add-new-user-service');
const { createUserToken } = require('../../utils/create-user-token');

const signInController = async (req, res) => {
  await addNewUserService(req.body);
  const userToken = await createUserToken(req.body.username, req.body.name);

  res.json({
    userToken,
  });
};

module.exports = {
  signInController,
};
