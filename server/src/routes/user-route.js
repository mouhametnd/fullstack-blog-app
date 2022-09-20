const { Router } = require('express');
const { updateUserNameController } = require('../controllers/user/update-user-name-controller');
const { updateUsernameController } = require('../controllers/user/update-username-controller');
const { userBlogsController } = require('../controllers/user/user-blogs-controller');
const { userController } = require('../controllers/user/user-controller');
const { jwtVerifierMiddleware } = require('../middlewares/auth/jwt-verifier-middleware');
const { usernameValidatorMiddleware } = require('../middlewares/auth/username-validator-middleware');
const { updateUserNameMiddleware } = require('../middlewares/user/update-user-name-middleware');
const { updateUsernameMiddleware } = require('../middlewares/user/update-username-middleware');

const userRoute = Router();

userRoute.use(jwtVerifierMiddleware)
userRoute.use(usernameValidatorMiddleware)

userRoute.get('/',userController )
userRoute.get('/blogs',userBlogsController )
userRoute.post('/update/name', updateUserNameMiddleware, updateUserNameController)

userRoute.post('/update/username', updateUsernameMiddleware, updateUsernameController)


module.exports = {
  userRoute
}