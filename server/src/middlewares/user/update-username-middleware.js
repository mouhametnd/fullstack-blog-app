const { usernameDTOValidator } = require('../../dto/user/username-dto-validator');
const { getCollection } = require('../../utils/get-collection');
const { invalidDTOSender } = require('../../utils/invalid-dto-sender');

const updateUsernameMiddleware = async (req, res, next) => {
  try {
    if (!usernameDTOValidator(req.body)) return invalidDTOSender(res);
    const { username } = res.locals.verified.payload;
    const  newUsername  = req.body.username;

    if (username === newUsername) {
      res.status(400);
      res.json({ error: 'username should be different' });
      return;
    }

    const usersCollection = getCollection('users');
    const hasRegisteredUser = await usersCollection.findOne({ username: newUsername });

    if (hasRegisteredUser) {
      res.status(406);
      res.json({ error: 'username is not available' });
      return;
    }

    next();
  } catch (error) {
    res.status(500);
    res.json({ error: 'server error while updating the username' });
  }
};

module.exports = {
  updateUsernameMiddleware,
};
