const { userProjectedProps } = require('../../constants/user-projected-props');
const { getCollection } = require('../../utils/get-collection');
const { unauthorizedSender } = require('../../utils/unauthorized-sender');

const usernameValidatorMiddleware = async (_, res, next) => {
  try {
    const { username } = res.locals.verified.payload;
    const usersCollection = getCollection('users');
    const [user] = await usersCollection.find({ username }).project(userProjectedProps).toArray();

    if (!user) return unauthorizedSender(res);
    res.locals.user = user;
    next();
  } catch (err) {
    res.status(503);
    res.json({ error: 'Server error durring validation' });
  }
};

module.exports = {
  usernameValidatorMiddleware,
};
