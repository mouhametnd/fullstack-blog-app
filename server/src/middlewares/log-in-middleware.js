const bcrypt = require('bcrypt');
const { logInDTOValidator } = require('../dto/log-in-dto-validator');
const { getCollection } = require('../utils/get-collection');
const { wrongCredentialsSender } = require('../utils/wrong-credentials-sender');

const logInMiddleware = async (req, res, next) => {
  const { body } = req;
  if (!logInDTOValidator(body)) {
    res.status(406);
    res.json({ error: 'DTO is not valid' });
    return;
  }
  const usersCollection = getCollection('users');
  const isUserRegistered = await usersCollection.findOne({ username: body.username });
  if (!isUserRegistered) return wrongCredentialsSender(res);

  const arePwdsSame = await bcrypt.compare( body.password, isUserRegistered.password);

  if (!arePwdsSame) return wrongCredentialsSender(res);

  const { username, blogs, name } = isUserRegistered;

  res.locals.user = { username, blogs, name };
  next();
};

module.exports = {
  logInMiddleware,
};
