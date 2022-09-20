const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');

const usernameValidatorMiddleware = async (req, res, next) => {
  try {
    const { username } = res.locals.verified.payload;

    const usersCollection = getCollection('users');

    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();

    if (!user) {
      res.status(401);
      res.json({ error: 'Unauthorized' });
      return;
    }
    res.locals.user = user;
    next();
  } catch (err) {
    res.status(503)
    res.json({error: "Server error durring validation"})
  }
};

module.exports = {
  usernameValidatorMiddleware,
};
