const { signInDTOValidator } = require('../../dto/auth/sign-in-dto-validator.js');
const { getCollection } = require('../../utils/get-collection.js');
const { invalidDTOSender } = require('../../utils/invalid-dto-sender.js');

const signInMiddleware = async (req, res, next) => {
  if (!signInDTOValidator(req.body)) return invalidDTOSender(res)

  const { username } = req.body;
  const usersCollection = getCollection('users');
  const isUserRegistered = await usersCollection.findOne({ username });
  if (isUserRegistered) {
    res.status(409);
    res.json({
      error: 'user is already registered',
    });
    return;
  }

  next();
};

module.exports = {
  signInMiddleware,
};
