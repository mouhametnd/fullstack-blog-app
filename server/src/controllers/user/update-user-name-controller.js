const { updateBlogsUserCreatorService } = require('../../services/blogs/update-blogs-user-creator-service');
const { updateUserNameService } = require('../../services/user/update-user-name-service');

const updateUserNameController = async (req, res) => {
  const { newName } = req.body;
  const { username } = res.locals.verified.payload;

  const [userNameResult, blogUserCreatorResult] = await Promise.all([
    updateUserNameService({ newName, username }),
    updateBlogsUserCreatorService({ newName, username }),
  ]);

  if (userNameResult.error || blogUserCreatorResult.error) {
    res.status(500);
    res.json({ error: 'server error while updating the user name' });
    return;
  }

  res.json({ ...userNameResult });
};
module.exports = {
  updateUserNameController,
};
