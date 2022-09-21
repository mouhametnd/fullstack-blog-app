const { updateBlogsUserCreatorService } = require('../../services/blogs/update-blogs-user-creator-service');
const { updateUsernameService } = require('../../services/user/update-username-service');
const { createUserToken } = require('../../utils/create-user-token');

const updateUsernameController = async (req, res) => {
  const { newUsername } = req.body;
  const { username, name } = res.locals.verified.payload;

  const [usernameResult, blogsUserCreatorResult, newUserToken] = await Promise.all([
    updateUsernameService({ newUsername, username }),
    updateBlogsUserCreatorService({ newUsername, username }),
    createUserToken(newUsername, name),
  ]);

  if (usernameResult.error || blogsUserCreatorResult.error) {
    res.status(503);
    res.json({ error: 'server error while updating the user name' });
    return;
  }

  res.json({ result: { newUserToken } });
};

module.exports = {
  updateUsernameController,
};
