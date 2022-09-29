const bcrypt = require('bcrypt');
const { logInDTOValidator } = require('../../dto/auth/log-in-dto-validator');
const { getCollection } = require('../../utils/get-collection');
const { invalidDTOSender } = require('../../utils/invalid-dto-sender');
const { wrongCredentialsSender } = require('../../utils/wrong-credentials-sender');

const logInMiddleware = async (req, res, next) => {
  const { body } = req;
  if (!logInDTOValidator(body)) return invalidDTOSender(res);

  const usersCollection = getCollection('users');
  const isUserRegistered = await usersCollection.findOne({ username: body.username });
  console.log(isUserRegistered)
  if (!isUserRegistered) return wrongCredentialsSender(res);

  const arePwdsSame = await bcrypt.compare(body.password, isUserRegistered.password);
  if (!arePwdsSame) return wrongCredentialsSender(res);
  const { username, blogs, name, latestUpdate, _id } = isUserRegistered;
  res.locals.user = { username, blogs, name, latestUpdate, _id };
  next();
};

module.exports = {
  logInMiddleware,
};
