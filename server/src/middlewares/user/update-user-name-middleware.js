const { userNameDTOValidator } = require('../../dto/user/user-name-dto-validator');
const { invalidDTOSender } = require('../../utils/invalid-dto-sender');

const updateUserNameMiddleware = (req, res, next) => (userNameDTOValidator(req.body) ? next() : invalidDTOSender(res));

module.exports = {
  updateUserNameMiddleware,
};
