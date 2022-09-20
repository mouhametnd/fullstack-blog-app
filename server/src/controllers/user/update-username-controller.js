const { updateBlogsUserCreatorService } = require('../../services/blogs/update-blogs-user-creator-service');
const { updateUsernameService } = require('../../services/user/update-username-service');
const { createUserToken } = require('../../utils/create-user-token');

const updateUsernameController = async (req, res) => {
  const { newUsername } = req.body;
  const { username, name } = res.locals.verified.payload;

  const updateUsername = await updateUsernameService({ newUsername, username });

  if (updateUsername.error) {
    res.status(503);
    res.json({ error:updateUsername.error });
    return;
  }

  const updateBlogsUserCreator = await updateBlogsUserCreatorService({ newUsername, username });

  if (updateBlogsUserCreator.error) {
    res.status(503);
    res.json({ error:updateBlogsUserCreator.error });
    return;
  }

  const newUserToken = await createUserToken(newUsername, name);

  res.json({ result: { newUserToken } });
};

module.exports = {
  updateUsernameController,
};
