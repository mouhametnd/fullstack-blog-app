const { userNameDTOValidator } = require('../../dto/user/user-name-dto-validator');

const updateUserNameMiddleware = (req, res, next) => {
  if (userNameDTOValidator(req.body)) {
    next();
    return;
  }

  res.status(400)
  res.json({error: "DTO is not valid"})
};


module.exports = {
  updateUserNameMiddleware
}