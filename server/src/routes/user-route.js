const { Router } = require('express');
const { updateUserNameController } = require('../controllers/user/update-user-name-controller');
const { updateUsernameController } = require('../controllers/user/update-username-controller');
const { getUserBlogsController } = require('../controllers/user/get-user-blogs-controller');
const { getUserController } = require('../controllers/user/get-user-controller');
const { jwtVerifierMiddleware } = require('../middlewares/auth/jwt-verifier-middleware');
const { usernameValidatorMiddleware } = require('../middlewares/auth/username-validator-middleware');
const { updateUserNameMiddleware } = require('../middlewares/user/update-user-name-middleware');
const { updateUsernameMiddleware } = require('../middlewares/user/update-username-middleware');

const userRoute = Router();
userRoute.use(jwtVerifierMiddleware);
userRoute.use(usernameValidatorMiddleware);

userRoute.get('/', getUserController);
userRoute.get('/blogs', getUserBlogsController);
userRoute.patch('/update/name', updateUserNameMiddleware, updateUserNameController);
userRoute.patch('/update/username', updateUsernameMiddleware, updateUsernameController);

module.exports = {
  userRoute,
};
