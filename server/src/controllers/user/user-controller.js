const { userService } = require('../../services/user/user-service');

const userController = async (req, res) => {
  const { username } = res.locals.verified.payload;
  const { blogsNum } = req.query;
  const { error, result } = await userService(username, blogsNum);

  if (error) {
    res.status(400);
    res.json({ error: 'Error Fetching user credits' });

    return;
  }

  res.json({result});
};

module.exports = {
  userController
}