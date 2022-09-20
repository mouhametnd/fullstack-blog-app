const { getCollection } = require('../../utils/get-collection');

const usernameValidatorMiddleware = async (req, res, next) => {
  const { username } = res.locals.verified.payload;

  const usersCollection = getCollection('users');

  const user = await usersCollection.findOne({ username });

  if (user) return next();

  res.status(401);
  res.json({ error: 'Unauthorized' });
};

module.exports = {
  usernameValidatorMiddleware,
};
