const { signInDTOValidator } = require('../dto/sign-in-dto-validator.js');
const { getCollection } = require('../utils/get-collection.js');

const signInMiddleware = async (req, res, next) => {
  if (!signInDTOValidator(req.body)) {
    res.status(406);
    res.json({ error: "DTO is not valid"});
    return;
  }

  const { username } = req.body;
  const usersCollection = getCollection('users');
  const isUserRegistered = await usersCollection.findOne({ username });
  if (isUserRegistered) {
    res.status(409);
    res.json({
      error: 'User already exist',
    });
    return;
  }

  next();
};

module.exports = {
  signInMiddleware,
};
