const { usernameDTOValidator } = require('../../dto/user/username-dto-validator');
const { wrongDTOSender } = require('../../utils/wrong-dto-sender');

const updateUsernameMiddleware = (req, res, next) => {
  if (!usernameDTOValidator(req.body)) {
    wrongDTOSender(res);
    return;
  }

  const { username } = res.locals.verified.payload;

  if (username === req.body.newUsername) {
    // wrongDTOSender(res);
    // todo error sended function with status code and message
    res.status(400)
    res.json({error: "username should be different"})
    return;
  }


  next();
};

module.exports = {
  updateUsernameMiddleware
}