const { updateBlogsUserCreatorService } = require('../../services/blogs/update-blogs-user-creator-service');
const { updateUserNameService } = require('../../services/user/update-user-name-service');

const updateUserNameController = async (req, res) => {
  const { name } = req.body;
  const { username } = res.locals.verified.payload;

  const [userNameResult, blogUserCreatorResult] = await Promise.all([
    updateUserNameService({ newName: name, username }),
    updateBlogsUserCreatorService({ newName: name, username }),
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
