const { getUserService } = require('../../services/user/get-user-service');

const getUserController = async (req, res) => {
  const { username } = res.locals.verified.payload;
  const { blogsNum } = req.query;
  const result = await getUserService(username, +blogsNum);

  if (result.error) res.status(500);
  res.json(result);
};

module.exports = {
  getUserController,
};
